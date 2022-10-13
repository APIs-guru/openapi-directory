from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import buildsystem_shared_dto_jobactivity
from . import buildsystem_shared_dto_parameter


@dataclass_json
@dataclass
class BuildSystemSharedDtoJob:
    activities: Optional[List[buildsystem_shared_dto_jobactivity.BuildSystemSharedDtoJobActivity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Activities' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Deleted' }})
    job_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobID' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    parameters: Optional[List[buildsystem_shared_dto_parameter.BuildSystemSharedDtoParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    
