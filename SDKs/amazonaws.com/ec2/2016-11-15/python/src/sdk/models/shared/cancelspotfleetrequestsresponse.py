from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CancelSpotFleetRequestsResponse:
    r"""CancelSpotFleetRequestsResponse
    Contains the output of CancelSpotFleetRequests.
    """
    
    successful_fleet_requests: Optional[List[CancelSpotFleetRequestsSuccessItem]] = field(default=None)
    unsuccessful_fleet_requests: Optional[List[CancelSpotFleetRequestsErrorItem]] = field(default=None)
    
