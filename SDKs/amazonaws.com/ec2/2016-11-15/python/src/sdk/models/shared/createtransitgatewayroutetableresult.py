from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateTransitGatewayRouteTableResult:
    transit_gateway_route_table: Optional[TransitGatewayRouteTable] = field(default=None)
    
