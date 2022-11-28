from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class CancelSpotFleetRequestsSuccessItem:
    r"""CancelSpotFleetRequestsSuccessItem
    Describes a Spot Fleet request that was successfully canceled.
    """
    
    current_spot_fleet_request_state: Optional[BatchStateEnum] = field(default=None)
    previous_spot_fleet_request_state: Optional[BatchStateEnum] = field(default=None)
    spot_fleet_request_id: Optional[str] = field(default=None)
    
