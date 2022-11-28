from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class MovingAddressStatus:
    r"""MovingAddressStatus
    Describes the status of a moving Elastic IP address.
    """
    
    move_status: Optional[MoveStatusEnum] = field(default=None)
    public_ip: Optional[str] = field(default=None)
    
