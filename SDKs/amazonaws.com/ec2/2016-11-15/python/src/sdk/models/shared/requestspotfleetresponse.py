from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RequestSpotFleetResponse:
    r"""RequestSpotFleetResponse
    Contains the output of RequestSpotFleet.
    """
    
    spot_fleet_request_id: Optional[str] = field(default=None)
    
