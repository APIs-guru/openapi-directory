from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import clusterstate_enum
from . import clusterstatechangereason
from . import clustertimeline


@dataclass_json
@dataclass
class ClusterStatus:
    state: Optional[clusterstate_enum.ClusterStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_change_reason: Optional[clusterstatechangereason.ClusterStateChangeReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateChangeReason' }})
    timeline: Optional[clustertimeline.ClusterTimeline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeline' }})
    
