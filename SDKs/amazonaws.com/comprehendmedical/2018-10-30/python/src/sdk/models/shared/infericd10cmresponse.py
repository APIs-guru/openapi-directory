from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import icd10cmentity


@dataclass_json
@dataclass
class InferIcd10CmResponse:
    entities: List[icd10cmentity.Icd10CmEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entities' }})
    model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelVersion' }})
    pagination_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaginationToken' }})
    
