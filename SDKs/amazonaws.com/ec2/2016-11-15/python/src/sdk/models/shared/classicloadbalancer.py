from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ClassicLoadBalancer:
    r"""ClassicLoadBalancer
    Describes a Classic Load Balancer.
    """
    
    name: Optional[str] = field(default=None)
    
