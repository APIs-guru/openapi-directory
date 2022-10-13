from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import buildsystem_shared_dto_parameter
from . import buildsystem_shared_dto_activitystep


@dataclass_json
@dataclass
class BuildSystemSharedDtoActivity:
    activity_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivityID' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Deleted' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    parameters: Optional[List[buildsystem_shared_dto_parameter.BuildSystemSharedDtoParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    steps: Optional[List[buildsystem_shared_dto_activitystep.BuildSystemSharedDtoActivityStep]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Steps' }})
    
