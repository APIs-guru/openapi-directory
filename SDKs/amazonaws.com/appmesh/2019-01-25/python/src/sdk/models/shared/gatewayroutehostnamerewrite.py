from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GatewayRouteHostnameRewrite:
    r"""GatewayRouteHostnameRewrite
    An object representing the gateway route host name to rewrite.
    """
    
    default_target_hostname: Optional[DefaultGatewayRouteRewriteEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultTargetHostname') }})
    
