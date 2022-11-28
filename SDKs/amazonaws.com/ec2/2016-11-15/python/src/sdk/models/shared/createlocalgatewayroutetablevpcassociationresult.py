from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateLocalGatewayRouteTableVpcAssociationResult:
    local_gateway_route_table_vpc_association: Optional[LocalGatewayRouteTableVpcAssociation] = field(default=None)
    
