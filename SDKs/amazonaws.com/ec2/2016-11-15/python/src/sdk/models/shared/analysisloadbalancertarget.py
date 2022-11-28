from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class AnalysisLoadBalancerTarget:
    r"""AnalysisLoadBalancerTarget
    Describes a load balancer target.
    """
    
    address: Optional[str] = field(default=None)
    availability_zone: Optional[str] = field(default=None)
    instance: Optional[AnalysisComponent] = field(default=None)
    port: Optional[int] = field(default=None)
    
