from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import managedscalingpolicy


@dataclass_json
@dataclass
class GetManagedScalingPolicyOutput:
    managed_scaling_policy: Optional[managedscalingpolicy.ManagedScalingPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManagedScalingPolicy' }})
    
