from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class CancelledSpotInstanceRequest:
    r"""CancelledSpotInstanceRequest
    Describes a request to cancel a Spot Instance.
    """
    
    spot_instance_request_id: Optional[str] = field(default=None)
    state: Optional[CancelSpotInstanceRequestStateEnum] = field(default=None)
    
