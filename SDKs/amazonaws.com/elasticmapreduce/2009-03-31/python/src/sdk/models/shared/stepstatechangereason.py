from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StepStateChangeReason:
    r"""StepStateChangeReason
    The details of the step state change reason.
    """
    
    code: Optional[StepStateChangeReasonCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
