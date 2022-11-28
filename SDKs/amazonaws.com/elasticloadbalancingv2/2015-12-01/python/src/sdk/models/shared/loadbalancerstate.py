from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class LoadBalancerState:
    r"""LoadBalancerState
    Information about the state of the load balancer.
    """
    
    code: Optional[LoadBalancerStateEnumEnum] = field(default=None)
    reason: Optional[str] = field(default=None)
    
