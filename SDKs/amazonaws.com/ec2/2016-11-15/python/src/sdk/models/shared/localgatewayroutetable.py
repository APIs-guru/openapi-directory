from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class LocalGatewayRouteTable:
    r"""LocalGatewayRouteTable
    Describes a local gateway route table.
    """
    
    local_gateway_id: Optional[str] = field(default=None)
    local_gateway_route_table_arn: Optional[str] = field(default=None)
    local_gateway_route_table_id: Optional[str] = field(default=None)
    outpost_arn: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    state: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
