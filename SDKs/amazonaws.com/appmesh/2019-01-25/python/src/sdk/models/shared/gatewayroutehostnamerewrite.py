from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import defaultgatewayrouterewrite_enum


@dataclass_json
@dataclass
class GatewayRouteHostnameRewrite:
    default_target_hostname: Optional[defaultgatewayrouterewrite_enum.DefaultGatewayRouteRewriteEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultTargetHostname' }})
    
