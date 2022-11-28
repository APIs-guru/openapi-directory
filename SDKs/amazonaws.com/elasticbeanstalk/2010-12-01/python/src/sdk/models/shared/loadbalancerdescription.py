from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class LoadBalancerDescription:
    r"""LoadBalancerDescription
    Describes the details of a LoadBalancer.
    """
    
    domain: Optional[str] = field(default=None)
    listeners: Optional[List[Listener]] = field(default=None)
    load_balancer_name: Optional[str] = field(default=None)
    
