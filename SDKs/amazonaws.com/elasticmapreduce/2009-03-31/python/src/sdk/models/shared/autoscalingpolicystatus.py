from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import autoscalingpolicystate_enum
from . import autoscalingpolicystatechangereason


@dataclass_json
@dataclass
class AutoScalingPolicyStatus:
    state: Optional[autoscalingpolicystate_enum.AutoScalingPolicyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_change_reason: Optional[autoscalingpolicystatechangereason.AutoScalingPolicyStateChangeReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateChangeReason' }})
    
