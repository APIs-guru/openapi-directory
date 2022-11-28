from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class VpnConnection:
    r"""VpnConnection
    Describes a VPN connection.
    """
    
    category: Optional[str] = field(default=None)
    customer_gateway_configuration: Optional[str] = field(default=None)
    customer_gateway_id: Optional[str] = field(default=None)
    options: Optional[VpnConnectionOptions] = field(default=None)
    routes: Optional[List[VpnStaticRoute]] = field(default=None)
    state: Optional[VpnStateEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    transit_gateway_id: Optional[str] = field(default=None)
    type: Optional[GatewayTypeEnum] = field(default=None)
    vgw_telemetry: Optional[List[VgwTelemetry]] = field(default=None)
    vpn_connection_id: Optional[str] = field(default=None)
    vpn_gateway_id: Optional[str] = field(default=None)
    
