from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeAccessPointsOutput:
    r"""DescribeAccessPointsOutput
    Contains the parameters for DescribeLoadBalancers.
    """
    
    load_balancer_descriptions: Optional[List[LoadBalancerDescription]] = field(default=None)
    next_marker: Optional[str] = field(default=None)
    
