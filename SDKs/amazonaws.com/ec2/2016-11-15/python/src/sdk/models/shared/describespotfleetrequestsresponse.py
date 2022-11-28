from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeSpotFleetRequestsResponse:
    r"""DescribeSpotFleetRequestsResponse
    Contains the output of DescribeSpotFleetRequests.
    """
    
    next_token: Optional[str] = field(default=None)
    spot_fleet_request_configs: Optional[List[SpotFleetRequestConfig]] = field(default=None)
    
