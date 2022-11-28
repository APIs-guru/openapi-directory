from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DetachLoadBalancerFromSubnetsOutput:
    r"""DetachLoadBalancerFromSubnetsOutput
    Contains the output of DetachLoadBalancerFromSubnets.
    """
    
    subnets: Optional[List[str]] = field(default=None)
    
