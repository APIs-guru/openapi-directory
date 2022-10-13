from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import targetgroupinfo
from . import targetlabel_enum


@dataclass_json
@dataclass
class EcsTaskSet:
    desired_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredCount' }})
    identifer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifer' }})
    pending_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingCount' }})
    running_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runningCount' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target_group: Optional[targetgroupinfo.TargetGroupInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetGroup' }})
    task_set_label: Optional[targetlabel_enum.TargetLabelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskSetLabel' }})
    traffic_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trafficWeight' }})
    
