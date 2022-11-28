from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeSpotInstanceRequestsResult:
    r"""DescribeSpotInstanceRequestsResult
    Contains the output of DescribeSpotInstanceRequests.
    """
    
    next_token: Optional[str] = field(default=None)
    spot_instance_requests: Optional[List[SpotInstanceRequest]] = field(default=None)
    
