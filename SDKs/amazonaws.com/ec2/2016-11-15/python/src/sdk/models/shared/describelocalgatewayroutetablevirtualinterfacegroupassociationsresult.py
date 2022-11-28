from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult:
    local_gateway_route_table_virtual_interface_group_associations: Optional[List[LocalGatewayRouteTableVirtualInterfaceGroupAssociation]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
