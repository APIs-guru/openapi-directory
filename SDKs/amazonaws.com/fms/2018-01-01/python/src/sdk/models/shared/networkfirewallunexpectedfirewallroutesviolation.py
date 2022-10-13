from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import route


@dataclass_json
@dataclass
class NetworkFirewallUnexpectedFirewallRoutesViolation:
    firewall_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallEndpoint' }})
    firewall_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallSubnetId' }})
    route_table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RouteTableId' }})
    violating_routes: Optional[List[route.Route]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolatingRoutes' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
