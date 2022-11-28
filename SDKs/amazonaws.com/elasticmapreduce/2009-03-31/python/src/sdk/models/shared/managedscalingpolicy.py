from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ManagedScalingPolicy:
    r"""ManagedScalingPolicy
     Managed scaling policy for an Amazon EMR cluster. The policy specifies the limits for resources that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration. 
    """
    
    compute_limits: Optional[ComputeLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputeLimits') }})
    
