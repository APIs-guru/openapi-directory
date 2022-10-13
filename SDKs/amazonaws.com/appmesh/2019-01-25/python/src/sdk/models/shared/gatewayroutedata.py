from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import resourcemetadata
from . import gatewayroutespec
from . import gatewayroutestatus


@dataclass_json
@dataclass
class GatewayRouteData:
    gateway_route_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayRouteName' }})
    mesh_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshName' }})
    metadata: resourcemetadata.ResourceMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    spec: gatewayroutespec.GatewayRouteSpec = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    status: gatewayroutestatus.GatewayRouteStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    virtual_gateway_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualGatewayName' }})
    
