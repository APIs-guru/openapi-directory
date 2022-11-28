from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDataCatalogOutput:
    data_catalog: Optional[DataCatalog] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataCatalog') }})
    
