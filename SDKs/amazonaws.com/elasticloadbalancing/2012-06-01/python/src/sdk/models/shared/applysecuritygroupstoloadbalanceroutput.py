from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ApplySecurityGroupsToLoadBalancerOutput:
    r"""ApplySecurityGroupsToLoadBalancerOutput
    Contains the output of ApplySecurityGroupsToLoadBalancer.
    """
    
    security_groups: Optional[List[str]] = field(default=None)
    
