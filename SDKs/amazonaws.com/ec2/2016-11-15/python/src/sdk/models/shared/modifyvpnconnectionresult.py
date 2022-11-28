from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyVpnConnectionResult:
    vpn_connection: Optional[VpnConnection] = field(default=None)
    
