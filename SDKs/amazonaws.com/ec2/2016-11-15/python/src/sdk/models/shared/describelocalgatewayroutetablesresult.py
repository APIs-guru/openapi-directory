from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeLocalGatewayRouteTablesResult:
    local_gateway_route_tables: Optional[List[LocalGatewayRouteTable]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
