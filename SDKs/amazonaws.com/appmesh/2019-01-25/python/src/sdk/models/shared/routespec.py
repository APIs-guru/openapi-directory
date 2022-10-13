from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import grpcroute
from . import httproute
from . import httproute
from . import tcproute


@dataclass_json
@dataclass
class RouteSpec:
    grpc_route: Optional[grpcroute.GrpcRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grpcRoute' }})
    http2_route: Optional[httproute.HTTPRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http2Route' }})
    http_route: Optional[httproute.HTTPRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpRoute' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    tcp_route: Optional[tcproute.TCPRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tcpRoute' }})
    
