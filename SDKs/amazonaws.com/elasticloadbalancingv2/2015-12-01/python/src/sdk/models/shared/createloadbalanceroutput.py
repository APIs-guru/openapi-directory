from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CreateLoadBalancerOutput:
    load_balancers: Optional[List[LoadBalancer]] = field(default=None)
    
