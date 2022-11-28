from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CancelSpotFleetRequestsErrorItem:
    r"""CancelSpotFleetRequestsErrorItem
    Describes a Spot Fleet request that was not successfully canceled.
    """
    
    error: Optional[CancelSpotFleetRequestsError] = field(default=None)
    spot_fleet_request_id: Optional[str] = field(default=None)
    
