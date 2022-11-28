from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeLoadBalancerPolicyTypesOutput:
    r"""DescribeLoadBalancerPolicyTypesOutput
    Contains the output of DescribeLoadBalancerPolicyTypes.
    """
    
    policy_type_descriptions: Optional[List[PolicyTypeDescription]] = field(default=None)
    
