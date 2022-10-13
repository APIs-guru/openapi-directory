from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import autoscalingpolicyupdate


@dataclass_json
@dataclass
class AutoScalingSettingsUpdate:
    auto_scaling_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingDisabled' }})
    auto_scaling_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingRoleArn' }})
    maximum_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumUnits' }})
    minimum_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumUnits' }})
    scaling_policy_update: Optional[autoscalingpolicyupdate.AutoScalingPolicyUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingPolicyUpdate' }})
    
