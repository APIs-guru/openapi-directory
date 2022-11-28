from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ClientVpnRouteStatus:
    r"""ClientVpnRouteStatus
    Describes the state of a Client VPN endpoint route.
    """
    
    code: Optional[ClientVpnRouteStatusCodeEnum] = field(default=None)
    message: Optional[str] = field(default=None)
    
