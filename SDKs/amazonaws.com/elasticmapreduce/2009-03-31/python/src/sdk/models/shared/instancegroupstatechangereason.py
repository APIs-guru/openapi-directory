from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceGroupStateChangeReason:
    r"""InstanceGroupStateChangeReason
    The status change reason details for the instance group.
    """
    
    code: Optional[InstanceGroupStateChangeReasonCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
