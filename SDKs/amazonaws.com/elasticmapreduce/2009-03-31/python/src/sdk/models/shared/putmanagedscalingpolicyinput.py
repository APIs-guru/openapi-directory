from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import managedscalingpolicy


@dataclass_json
@dataclass
class PutManagedScalingPolicyInput:
    cluster_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    managed_scaling_policy: managedscalingpolicy.ManagedScalingPolicy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManagedScalingPolicy' }})
    
