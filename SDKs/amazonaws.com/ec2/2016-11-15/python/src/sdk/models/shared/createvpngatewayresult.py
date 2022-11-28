from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateVpnGatewayResult:
    r"""CreateVpnGatewayResult
    Contains the output of CreateVpnGateway.
    """
    
    vpn_gateway: Optional[VpnGateway] = field(default=None)
    
