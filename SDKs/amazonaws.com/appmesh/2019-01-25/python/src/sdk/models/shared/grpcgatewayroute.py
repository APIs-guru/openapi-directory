from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrpcGatewayRoute:
    r"""GrpcGatewayRoute
    An object that represents a gRPC gateway route.
    """
    
    action: GrpcGatewayRouteAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    match: GrpcGatewayRouteMatch = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    
