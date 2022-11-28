from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class AttachLoadBalancerToSubnetsOutput:
    r"""AttachLoadBalancerToSubnetsOutput
    Contains the output of AttachLoadBalancerToSubnets.
    """
    
    subnets: Optional[List[str]] = field(default=None)
    
