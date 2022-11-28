from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InferIcd10CmResponse:
    entities: List[Icd10CmEntity] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entities') }})
    model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelVersion') }})
    pagination_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaginationToken') }})
    
