from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import httpgatewayrouteaction
from . import httpgatewayroutematch


@dataclass_json
@dataclass
class HTTPGatewayRoute:
    action: httpgatewayrouteaction.HTTPGatewayRouteAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    match: httpgatewayroutematch.HTTPGatewayRouteMatch = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match' }})
    
