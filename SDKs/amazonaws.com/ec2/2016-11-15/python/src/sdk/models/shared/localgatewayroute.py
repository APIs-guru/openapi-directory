from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class LocalGatewayRoute:
    r"""LocalGatewayRoute
    Describes a route for a local gateway route table.
    """
    
    destination_cidr_block: Optional[str] = field(default=None)
    local_gateway_route_table_arn: Optional[str] = field(default=None)
    local_gateway_route_table_id: Optional[str] = field(default=None)
    local_gateway_virtual_interface_group_id: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    state: Optional[LocalGatewayRouteStateEnum] = field(default=None)
    type: Optional[LocalGatewayRouteTypeEnum] = field(default=None)
    
