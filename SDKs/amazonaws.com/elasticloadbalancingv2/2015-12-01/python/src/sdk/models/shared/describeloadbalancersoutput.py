from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeLoadBalancersOutput:
    load_balancers: Optional[List[LoadBalancer]] = field(default=None)
    next_marker: Optional[str] = field(default=None)
    
