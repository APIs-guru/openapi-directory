from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import gatewayroutedata


@dataclass_json
@dataclass
class DescribeGatewayRouteOutput:
    gateway_route: gatewayroutedata.GatewayRouteData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayRoute' }})
    
