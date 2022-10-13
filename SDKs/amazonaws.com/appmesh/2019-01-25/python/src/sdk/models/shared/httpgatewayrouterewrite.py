from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gatewayroutehostnamerewrite
from . import httpgatewayroutepathrewrite
from . import httpgatewayrouteprefixrewrite


@dataclass_json
@dataclass
class HTTPGatewayRouteRewrite:
    hostname: Optional[gatewayroutehostnamerewrite.GatewayRouteHostnameRewrite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    path: Optional[httpgatewayroutepathrewrite.HTTPGatewayRoutePathRewrite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    prefix: Optional[httpgatewayrouteprefixrewrite.HTTPGatewayRoutePrefixRewrite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    
