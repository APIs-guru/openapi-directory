from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class AutoScalingGroupsType:
    auto_scaling_groups: List[AutoScalingGroup] = field()
    next_token: Optional[str] = field(default=None)
    
