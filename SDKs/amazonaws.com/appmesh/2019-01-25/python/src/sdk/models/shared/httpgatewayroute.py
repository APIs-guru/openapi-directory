from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPGatewayRoute:
    r"""HTTPGatewayRoute
    An object that represents an HTTP gateway route.
    """
    
    action: HTTPGatewayRouteAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    match: HTTPGatewayRouteMatch = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    
