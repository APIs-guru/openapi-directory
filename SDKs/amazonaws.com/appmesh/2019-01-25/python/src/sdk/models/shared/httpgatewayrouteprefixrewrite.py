from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import defaultgatewayrouterewrite_enum


@dataclass_json
@dataclass
class HTTPGatewayRoutePrefixRewrite:
    default_prefix: Optional[defaultgatewayrouterewrite_enum.DefaultGatewayRouteRewriteEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultPrefix' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
