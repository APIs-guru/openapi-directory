from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CancelSpotInstanceRequestsResult:
    r"""CancelSpotInstanceRequestsResult
    Contains the output of CancelSpotInstanceRequests.
    """
    
    cancelled_spot_instance_requests: Optional[List[CancelledSpotInstanceRequest]] = field(default=None)
    
