from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeLoadBalancerTargetGroupsResponse:
    load_balancer_target_groups: Optional[List[LoadBalancerTargetGroupState]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
