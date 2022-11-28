from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeSpotFleetInstancesResponse:
    r"""DescribeSpotFleetInstancesResponse
    Contains the output of DescribeSpotFleetInstances.
    """
    
    active_instances: Optional[List[ActiveInstance]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    spot_fleet_request_id: Optional[str] = field(default=None)
    
