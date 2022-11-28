from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoScalingPolicyStateChangeReason:
    r"""AutoScalingPolicyStateChangeReason
    The reason for an <a>AutoScalingPolicyStatus</a> change.
    """
    
    code: Optional[AutoScalingPolicyStateChangeReasonCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
