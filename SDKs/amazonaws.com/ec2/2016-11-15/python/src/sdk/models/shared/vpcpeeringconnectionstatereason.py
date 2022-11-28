from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class VpcPeeringConnectionStateReason:
    r"""VpcPeeringConnectionStateReason
    Describes the status of a VPC peering connection.
    """
    
    code: Optional[VpcPeeringConnectionStateReasonCodeEnum] = field(default=None)
    message: Optional[str] = field(default=None)
    
