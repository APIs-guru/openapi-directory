from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import route


@dataclass_json
@dataclass
class NetworkFirewallUnexpectedGatewayRoutesViolation:
    gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GatewayId' }})
    route_table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RouteTableId' }})
    violating_routes: Optional[List[route.Route]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolatingRoutes' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
