from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import buildsystem_shared_dto_parameter


@dataclass_json
@dataclass
class BuildSystemSharedDtoStep:
    config_required: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRequired' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Deleted' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    implementation_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImplementationID' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    parameters: Optional[List[buildsystem_shared_dto_parameter.BuildSystemSharedDtoParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    step_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepID' }})
    
