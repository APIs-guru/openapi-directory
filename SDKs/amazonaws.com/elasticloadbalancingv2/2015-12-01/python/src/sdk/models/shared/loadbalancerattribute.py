from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LoadBalancerAttribute:
    r"""LoadBalancerAttribute
    Information about a load balancer attribute.
    """
    
    key: Optional[str] = field(default=None)
    value: Optional[str] = field(default=None)
    
