from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GatewayRouteStatus:
    r"""GatewayRouteStatus
    An object that represents the current status of a gateway route.
    """
    
    status: GatewayRouteStatusCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
