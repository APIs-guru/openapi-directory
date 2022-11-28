from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeTransitGatewayRouteTablesResult:
    next_token: Optional[str] = field(default=None)
    transit_gateway_route_tables: Optional[List[TransitGatewayRouteTable]] = field(default=None)
    
