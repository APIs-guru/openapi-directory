from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GatewayRouteSpec:
    r"""GatewayRouteSpec
    An object that represents a gateway route specification. Specify one gateway route type.
    """
    
    grpc_route: Optional[GrpcGatewayRoute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpcRoute') }})
    http2_route: Optional[HTTPGatewayRoute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http2Route') }})
    http_route: Optional[HTTPGatewayRoute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRoute') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    
