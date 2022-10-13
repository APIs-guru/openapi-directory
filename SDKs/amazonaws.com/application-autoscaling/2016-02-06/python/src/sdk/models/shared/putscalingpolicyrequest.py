from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import policytype_enum
from . import scalabledimension_enum
from . import servicenamespace_enum
from . import stepscalingpolicyconfiguration
from . import targettrackingscalingpolicyconfiguration


@dataclass_json
@dataclass
class PutScalingPolicyRequest:
    policy_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyName' }})
    policy_type: Optional[policytype_enum.PolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyType' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    scalable_dimension: scalabledimension_enum.ScalableDimensionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalableDimension' }})
    service_namespace: servicenamespace_enum.ServiceNamespaceEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceNamespace' }})
    step_scaling_policy_configuration: Optional[stepscalingpolicyconfiguration.StepScalingPolicyConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepScalingPolicyConfiguration' }})
    target_tracking_scaling_policy_configuration: Optional[targettrackingscalingpolicyconfiguration.TargetTrackingScalingPolicyConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetTrackingScalingPolicyConfiguration' }})
    
