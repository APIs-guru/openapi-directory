from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import autoscalingpolicydescription


@dataclass_json
@dataclass
class AutoScalingSettingsDescription:
    auto_scaling_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingDisabled' }})
    auto_scaling_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingRoleArn' }})
    maximum_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumUnits' }})
    minimum_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumUnits' }})
    scaling_policies: Optional[List[autoscalingpolicydescription.AutoScalingPolicyDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingPolicies' }})
    
