from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class AssociatedTargetNetwork:
    r"""AssociatedTargetNetwork
    Describes a target network that is associated with a Client VPN endpoint. A target network is a subnet in a VPC.
    """
    
    network_id: Optional[str] = field(default=None)
    network_type: Optional[AssociatedNetworkTypeEnum] = field(default=None)
    
