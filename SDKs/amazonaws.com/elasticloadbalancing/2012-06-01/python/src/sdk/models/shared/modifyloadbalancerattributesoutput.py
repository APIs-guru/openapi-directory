from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyLoadBalancerAttributesOutput:
    r"""ModifyLoadBalancerAttributesOutput
    Contains the output of ModifyLoadBalancerAttributes.
    """
    
    load_balancer_attributes: Optional[LoadBalancerAttributes] = field(default=None)
    load_balancer_name: Optional[str] = field(default=None)
    
