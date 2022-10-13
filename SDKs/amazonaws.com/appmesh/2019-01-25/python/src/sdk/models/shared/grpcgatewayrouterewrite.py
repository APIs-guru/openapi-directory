from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gatewayroutehostnamerewrite


@dataclass_json
@dataclass
class GrpcGatewayRouteRewrite:
    hostname: Optional[gatewayroutehostnamerewrite.GatewayRouteHostnameRewrite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    
