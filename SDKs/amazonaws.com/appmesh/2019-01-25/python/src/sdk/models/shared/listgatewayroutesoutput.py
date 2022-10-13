from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gatewayrouteref


@dataclass_json
@dataclass
class ListGatewayRoutesOutput:
    gateway_routes: List[gatewayrouteref.GatewayRouteRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayRoutes' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
