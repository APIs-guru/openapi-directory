from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class VpnConnectionOptions:
    r"""VpnConnectionOptions
    Describes VPN connection options.
    """
    
    enable_acceleration: Optional[bool] = field(default=None)
    local_ipv4_network_cidr: Optional[str] = field(default=None)
    local_ipv6_network_cidr: Optional[str] = field(default=None)
    remote_ipv4_network_cidr: Optional[str] = field(default=None)
    remote_ipv6_network_cidr: Optional[str] = field(default=None)
    static_routes_only: Optional[bool] = field(default=None)
    tunnel_inside_ip_version: Optional[TunnelInsideIPVersionEnum] = field(default=None)
    tunnel_options: Optional[List[TunnelOption]] = field(default=None)
    
