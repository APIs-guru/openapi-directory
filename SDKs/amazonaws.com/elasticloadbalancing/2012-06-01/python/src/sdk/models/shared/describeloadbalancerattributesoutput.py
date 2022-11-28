from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DescribeLoadBalancerAttributesOutput:
    r"""DescribeLoadBalancerAttributesOutput
    Contains the output of DescribeLoadBalancerAttributes.
    """
    
    load_balancer_attributes: Optional[LoadBalancerAttributes] = field(default=None)
    
