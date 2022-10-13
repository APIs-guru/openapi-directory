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
class NetworkFirewallInvalidRouteConfigurationViolation:
    actual_firewall_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActualFirewallEndpoint' }})
    actual_firewall_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActualFirewallSubnetId' }})
    actual_firewall_subnet_routes: Optional[List[route.Route]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActualFirewallSubnetRoutes' }})
    actual_internet_gateway_routes: Optional[List[route.Route]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActualInternetGatewayRoutes' }})
    affected_subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AffectedSubnets' }})
    current_firewall_subnet_route_table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentFirewallSubnetRouteTable' }})
    current_internet_gateway_route_table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentInternetGatewayRouteTable' }})
    expected_firewall_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpectedFirewallEndpoint' }})
    expected_firewall_subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpectedFirewallSubnetId' }})
    expected_firewall_subnet_routes: Optional[List[expectedroute.ExpectedRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpectedFirewallSubnetRoutes' }})
    expected_internet_gateway_routes: Optional[List[expectedroute.ExpectedRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpectedInternetGatewayRoutes' }})
    internet_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InternetGatewayId' }})
    is_route_table_used_in_different_az: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsRouteTableUsedInDifferentAZ' }})
    route_table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RouteTableId' }})
    violating_route: Optional[route.Route] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolatingRoute' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
