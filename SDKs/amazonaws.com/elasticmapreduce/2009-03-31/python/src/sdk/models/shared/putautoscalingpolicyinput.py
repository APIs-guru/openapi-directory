from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import autoscalingpolicy


@dataclass_json
@dataclass
class PutAutoScalingPolicyInput:
    auto_scaling_policy: autoscalingpolicy.AutoScalingPolicy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingPolicy' }})
    cluster_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    instance_group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceGroupId' }})
    
