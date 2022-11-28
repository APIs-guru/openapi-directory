from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ModifySpotFleetRequestResponse:
    r"""ModifySpotFleetRequestResponse
    Contains the output of ModifySpotFleetRequest.
    """
    
    return_: Optional[bool] = field(default=None)
    
