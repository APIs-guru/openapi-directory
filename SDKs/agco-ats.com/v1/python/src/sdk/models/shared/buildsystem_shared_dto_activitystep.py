from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import buildsystem_shared_dto_parametermapping


@dataclass_json
@dataclass
class BuildSystemSharedDtoActivityStep:
    activity_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivityID' }})
    activity_step_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivityStepID' }})
    implementation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImplementationID' }})
    parameter_mappings: Optional[List[buildsystem_shared_dto_parametermapping.BuildSystemSharedDtoParameterMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterMappings' }})
    run_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunOrder' }})
    step_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepID' }})
    step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepName' }})
    use_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseConfig' }})
    
