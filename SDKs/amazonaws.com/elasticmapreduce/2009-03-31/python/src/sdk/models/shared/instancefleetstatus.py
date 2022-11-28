from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceFleetStatus:
    r"""InstanceFleetStatus
    <p>The status of the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
    """
    
    state: Optional[InstanceFleetStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    state_change_reason: Optional[InstanceFleetStateChangeReason] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateChangeReason') }})
    timeline: Optional[InstanceFleetTimeline] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeline') }})
    
