from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LoadBalancer:
    r"""LoadBalancer
    Describes a LoadBalancer.
    """
    
    name: Optional[str] = field(default=None)
    
