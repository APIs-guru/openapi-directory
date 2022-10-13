from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import instancefleetstate_enum
from . import instancefleetstatechangereason
from . import instancefleettimeline


@dataclass_json
@dataclass
class InstanceFleetStatus:
    state: Optional[instancefleetstate_enum.InstanceFleetStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_change_reason: Optional[instancefleetstatechangereason.InstanceFleetStateChangeReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateChangeReason' }})
    timeline: Optional[instancefleettimeline.InstanceFleetTimeline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeline' }})
    
