from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ClientVpnEndpointStatus:
    r"""ClientVpnEndpointStatus
    Describes the state of a Client VPN endpoint.
    """
    
    code: Optional[ClientVpnEndpointStatusCodeEnum] = field(default=None)
    message: Optional[str] = field(default=None)
    
