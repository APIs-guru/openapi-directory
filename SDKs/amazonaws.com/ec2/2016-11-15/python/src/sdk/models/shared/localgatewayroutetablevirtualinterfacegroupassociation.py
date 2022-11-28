from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class LocalGatewayRouteTableVirtualInterfaceGroupAssociation:
    r"""LocalGatewayRouteTableVirtualInterfaceGroupAssociation
    Describes an association between a local gateway route table and a virtual interface group.
    """
    
    local_gateway_id: Optional[str] = field(default=None)
    local_gateway_route_table_arn: Optional[str] = field(default=None)
    local_gateway_route_table_id: Optional[str] = field(default=None)
    local_gateway_route_table_virtual_interface_group_association_id: Optional[str] = field(default=None)
    local_gateway_virtual_interface_group_id: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    state: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
