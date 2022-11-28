from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeVpcEndpointServicesResult:
    r"""DescribeVpcEndpointServicesResult
    Contains the output of DescribeVpcEndpointServices.
    """
    
    next_token: Optional[str] = field(default=None)
    service_details: Optional[List[ServiceDetail]] = field(default=None)
    service_names: Optional[List[str]] = field(default=None)
    
