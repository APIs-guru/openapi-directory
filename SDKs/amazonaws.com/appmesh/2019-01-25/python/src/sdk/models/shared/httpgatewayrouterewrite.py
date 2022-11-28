from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPGatewayRouteRewrite:
    r"""HTTPGatewayRouteRewrite
    An object representing the gateway route to rewrite.
    """
    
    hostname: Optional[GatewayRouteHostnameRewrite] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    path: Optional[HTTPGatewayRoutePathRewrite] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    prefix: Optional[HTTPGatewayRoutePrefixRewrite] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    
