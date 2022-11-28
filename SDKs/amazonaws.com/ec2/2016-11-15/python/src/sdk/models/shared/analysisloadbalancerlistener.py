from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AnalysisLoadBalancerListener:
    r"""AnalysisLoadBalancerListener
    Describes a load balancer listener.
    """
    
    instance_port: Optional[int] = field(default=None)
    load_balancer_port: Optional[int] = field(default=None)
    
