from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SuspendedState:
    dynamic_scaling_in_suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DynamicScalingInSuspended' }})
    dynamic_scaling_out_suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DynamicScalingOutSuspended' }})
    scheduled_scaling_suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledScalingSuspended' }})
    
