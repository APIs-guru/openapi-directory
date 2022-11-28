from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GatewayRouteData:
    r"""GatewayRouteData
    An object that represents a gateway route returned by a describe operation.
    """
    
    gateway_route_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayRouteName') }})
    mesh_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    metadata: ResourceMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: GatewayRouteSpec = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: GatewayRouteStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    virtual_gateway_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualGatewayName') }})
    
