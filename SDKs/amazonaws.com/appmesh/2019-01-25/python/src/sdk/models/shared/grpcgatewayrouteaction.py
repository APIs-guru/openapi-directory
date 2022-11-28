from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrpcGatewayRouteAction:
    r"""GrpcGatewayRouteAction
    An object that represents the action to take if a match is determined.
    """
    
    target: GatewayRouteTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    rewrite: Optional[GrpcGatewayRouteRewrite] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rewrite') }})
    
