from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeLoadBalancerPoliciesOutput:
    r"""DescribeLoadBalancerPoliciesOutput
    Contains the output of DescribeLoadBalancerPolicies.
    """
    
    policy_descriptions: Optional[List[PolicyDescription]] = field(default=None)
    
