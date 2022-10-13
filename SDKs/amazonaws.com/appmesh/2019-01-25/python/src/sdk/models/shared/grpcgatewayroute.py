from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import grpcgatewayrouteaction
from . import grpcgatewayroutematch


@dataclass_json
@dataclass
class GrpcGatewayRoute:
    action: grpcgatewayrouteaction.GrpcGatewayRouteAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    match: grpcgatewayroutematch.GrpcGatewayRouteMatch = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match' }})
    
