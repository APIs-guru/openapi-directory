from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ClientVpnRoute:
    r"""ClientVpnRoute
    Information about a Client VPN endpoint route.
    """
    
    client_vpn_endpoint_id: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    destination_cidr: Optional[str] = field(default=None)
    origin: Optional[str] = field(default=None)
    status: Optional[ClientVpnRouteStatus] = field(default=None)
    target_subnet: Optional[str] = field(default=None)
    type: Optional[str] = field(default=None)
    
