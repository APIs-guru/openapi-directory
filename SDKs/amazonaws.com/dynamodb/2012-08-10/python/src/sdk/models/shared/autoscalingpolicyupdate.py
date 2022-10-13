from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import autoscalingtargettrackingscalingpolicyconfigurationupdate


@dataclass_json
@dataclass
class AutoScalingPolicyUpdate:
    policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyName' }})
    target_tracking_scaling_policy_configuration: autoscalingtargettrackingscalingpolicyconfigurationupdate.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetTrackingScalingPolicyConfiguration' }})
    
