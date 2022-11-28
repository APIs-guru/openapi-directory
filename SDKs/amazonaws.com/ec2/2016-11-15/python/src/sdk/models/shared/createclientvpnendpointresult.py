from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateClientVpnEndpointResult:
    client_vpn_endpoint_id: Optional[str] = field(default=None)
    dns_name: Optional[str] = field(default=None)
    status: Optional[ClientVpnEndpointStatus] = field(default=None)
    
