from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import grpcgatewayrouterewrite
from . import gatewayroutetarget


@dataclass_json
@dataclass
class GrpcGatewayRouteAction:
    rewrite: Optional[grpcgatewayrouterewrite.GrpcGatewayRouteRewrite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rewrite' }})
    target: gatewayroutetarget.GatewayRouteTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
