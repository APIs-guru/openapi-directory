from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeLocalGatewayRouteTableVpcAssociationsResult:
    local_gateway_route_table_vpc_associations: Optional[List[LocalGatewayRouteTableVpcAssociation]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
