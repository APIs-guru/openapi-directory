from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ClientVpnConnectionStatus:
    r"""ClientVpnConnectionStatus
    Describes the status of a client connection.
    """
    
    code: Optional[ClientVpnConnectionStatusCodeEnum] = field(default=None)
    message: Optional[str] = field(default=None)
    
