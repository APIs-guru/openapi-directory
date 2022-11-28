from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeLoadBalancersResponse:
    load_balancers: Optional[List[LoadBalancerState]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
