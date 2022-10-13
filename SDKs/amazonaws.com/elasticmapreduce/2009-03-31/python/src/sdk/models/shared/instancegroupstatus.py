from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import instancegroupstate_enum
from . import instancegroupstatechangereason
from . import instancegrouptimeline


@dataclass_json
@dataclass
class InstanceGroupStatus:
    state: Optional[instancegroupstate_enum.InstanceGroupStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_change_reason: Optional[instancegroupstatechangereason.InstanceGroupStateChangeReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateChangeReason' }})
    timeline: Optional[instancegrouptimeline.InstanceGroupTimeline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeline' }})
    
