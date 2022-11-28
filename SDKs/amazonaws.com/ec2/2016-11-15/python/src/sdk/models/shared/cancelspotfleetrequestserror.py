from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class CancelSpotFleetRequestsError:
    r"""CancelSpotFleetRequestsError
    Describes a Spot Fleet error.
    """
    
    code: Optional[CancelBatchErrorCodeEnum] = field(default=None)
    message: Optional[str] = field(default=None)
    
