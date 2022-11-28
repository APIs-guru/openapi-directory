from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyVpnTunnelOptionsResult:
    vpn_connection: Optional[VpnConnection] = field(default=None)
    
