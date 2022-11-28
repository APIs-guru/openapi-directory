from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ClientVpnEndpointAttributeStatus:
    r"""ClientVpnEndpointAttributeStatus
    Describes the status of the Client VPN endpoint attribute.
    """
    
    code: Optional[ClientVpnEndpointAttributeStatusCodeEnum] = field(default=None)
    message: Optional[str] = field(default=None)
    
