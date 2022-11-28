from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutScalingPolicyRequest:
    policy_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyName') }})
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    scalable_dimension: ScalableDimensionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalableDimension') }})
    service_namespace: ServiceNamespaceEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNamespace') }})
    policy_type: Optional[PolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyType') }})
    step_scaling_policy_configuration: Optional[StepScalingPolicyConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepScalingPolicyConfiguration') }})
    target_tracking_scaling_policy_configuration: Optional[TargetTrackingScalingPolicyConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTrackingScalingPolicyConfiguration') }})
    
