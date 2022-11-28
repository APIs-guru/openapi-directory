from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class LocalGatewayRouteTableVpcAssociation:
    r"""LocalGatewayRouteTableVpcAssociation
    Describes an association between a local gateway route table and a VPC.
    """
    
    local_gateway_id: Optional[str] = field(default=None)
    local_gateway_route_table_arn: Optional[str] = field(default=None)
    local_gateway_route_table_id: Optional[str] = field(default=None)
    local_gateway_route_table_vpc_association_id: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    state: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
