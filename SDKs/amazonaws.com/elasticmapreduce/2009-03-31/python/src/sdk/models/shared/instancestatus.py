from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import instancestate_enum
from . import instancestatechangereason
from . import instancetimeline


@dataclass_json
@dataclass
class InstanceStatus:
    state: Optional[instancestate_enum.InstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_change_reason: Optional[instancestatechangereason.InstanceStateChangeReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateChangeReason' }})
    timeline: Optional[instancetimeline.InstanceTimeline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeline' }})
    
