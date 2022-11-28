from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DisableStageTransitionInput:
    r"""DisableStageTransitionInput
    Represents the input of a <code>DisableStageTransition</code> action.
    """
    
    pipeline_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineName') }})
    reason: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    stage_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageName') }})
    transition_type: StageTransitionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionType') }})
    
