from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class AutoScalingInstancesType:
    auto_scaling_instances: Optional[List[AutoScalingInstanceDetails]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
