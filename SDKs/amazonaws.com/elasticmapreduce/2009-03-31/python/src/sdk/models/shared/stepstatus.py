from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StepStatus:
    r"""StepStatus
    The execution status details of the cluster step.
    """
    
    failure_details: Optional[FailureDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureDetails') }})
    state: Optional[StepStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    state_change_reason: Optional[StepStateChangeReason] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateChangeReason') }})
    timeline: Optional[StepTimeline] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeline') }})
    
