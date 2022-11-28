from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceStatus:
    r"""InstanceStatus
    The instance status details.
    """
    
    state: Optional[InstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    state_change_reason: Optional[InstanceStateChangeReason] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateChangeReason') }})
    timeline: Optional[InstanceTimeline] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeline') }})
    
