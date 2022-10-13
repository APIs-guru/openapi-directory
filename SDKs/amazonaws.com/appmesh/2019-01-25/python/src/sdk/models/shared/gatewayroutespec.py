from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import grpcgatewayroute
from . import httpgatewayroute
from . import httpgatewayroute


@dataclass_json
@dataclass
class GatewayRouteSpec:
    grpc_route: Optional[grpcgatewayroute.GrpcGatewayRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grpcRoute' }})
    http2_route: Optional[httpgatewayroute.HTTPGatewayRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http2Route' }})
    http_route: Optional[httpgatewayroute.HTTPGatewayRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpRoute' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    
