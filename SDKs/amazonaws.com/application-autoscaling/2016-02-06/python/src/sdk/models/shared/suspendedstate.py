from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SuspendedState:
    r"""SuspendedState
    Specifies whether the scaling activities for a scalable target are in a suspended state. 
    """
    
    dynamic_scaling_in_suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DynamicScalingInSuspended') }})
    dynamic_scaling_out_suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DynamicScalingOutSuspended') }})
    scheduled_scaling_suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledScalingSuspended') }})
    
