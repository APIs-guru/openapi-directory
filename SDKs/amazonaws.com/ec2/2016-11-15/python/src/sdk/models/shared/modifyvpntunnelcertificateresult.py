from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyVpnTunnelCertificateResult:
    vpn_connection: Optional[VpnConnection] = field(default=None)
    
