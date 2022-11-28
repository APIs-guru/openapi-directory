from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class VpnStaticRoute:
    r"""VpnStaticRoute
    Describes a static route for a VPN connection.
    """
    
    destination_cidr_block: Optional[str] = field(default=None)
    source: Optional[VpnStaticRouteSourceEnum] = field(default=None)
    state: Optional[VpnStateEnum] = field(default=None)
    
