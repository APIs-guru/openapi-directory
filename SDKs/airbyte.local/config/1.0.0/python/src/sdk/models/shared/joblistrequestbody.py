from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import jobconfigtype_enum
from . import pagination


@dataclass_json
@dataclass
class JobListRequestBody:
    config_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configId' }})
    config_types: List[jobconfigtype_enum.JobConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configTypes' }})
    pagination: Optional[pagination.Pagination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    
