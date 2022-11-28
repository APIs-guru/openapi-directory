from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateVpnConnectionResult:
    r"""CreateVpnConnectionResult
    Contains the output of CreateVpnConnection.
    """
    
    vpn_connection: Optional[VpnConnection] = field(default=None)
    
