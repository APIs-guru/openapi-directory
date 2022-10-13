from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import route
from . import route
from . import expectedroute
from . import expectedroute
from . import route


@dataclass_json
@dataclass
class NetworkFirewallInternetTrafficNotInspectedViolation:
    actual_firewall_subnet_routes: Optional[List[route.Route]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActualFirewallSubnetRoutes' }})
    actual_internet_gateway_routes: Optional[List[route.Route]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActualInternetGatewayRoutes' }})
    current_firewall_subnet_route_table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentFirewallSubnetRouteTable' }})
    current_internet_gateway_route_table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentInternetGatewayRouteTable' }})
    expected_firewall_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpectedFirewallEndpoint' }})
    expected_firewall_subnet_routes: Optional[List[expectedroute.ExpectedRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpectedFirewallSubnetRoutes' }})
    expected_internet_gateway_routes: Optional[List[expectedroute.ExpectedRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpectedInternetGatewayRoutes' }})
    firewall_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallSubnetId' }})
    internet_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InternetGatewayId' }})
    is_route_table_used_in_different_az: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsRouteTableUsedInDifferentAZ' }})
    route_table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RouteTableId' }})
    subnet_availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetAvailabilityZone' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    violating_routes: Optional[List[route.Route]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolatingRoutes' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
