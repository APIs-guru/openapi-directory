from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BuildSystemSharedDtoActivityStep:
    r"""BuildSystemSharedDtoActivityStep
    A DTO for an IActivityStep
    """
    
    activity_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivityID') }})
    activity_step_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivityStepID') }})
    implementation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImplementationID') }})
    parameter_mappings: Optional[List[BuildSystemSharedDtoParameterMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterMappings') }})
    run_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunOrder') }})
    step_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepID') }})
    step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepName') }})
    use_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseConfig') }})
    
