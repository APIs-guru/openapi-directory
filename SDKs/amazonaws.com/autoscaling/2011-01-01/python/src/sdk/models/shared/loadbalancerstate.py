from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LoadBalancerState:
    r"""LoadBalancerState
    Describes the state of a Classic Load Balancer.
    """
    
    load_balancer_name: Optional[str] = field(default=None)
    state: Optional[str] = field(default=None)
    
