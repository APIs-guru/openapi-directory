from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeVpcEndpointsResult:
    r"""DescribeVpcEndpointsResult
    Contains the output of DescribeVpcEndpoints.
    """
    
    next_token: Optional[str] = field(default=None)
    vpc_endpoints: Optional[List[VpcEndpoint]] = field(default=None)
    
