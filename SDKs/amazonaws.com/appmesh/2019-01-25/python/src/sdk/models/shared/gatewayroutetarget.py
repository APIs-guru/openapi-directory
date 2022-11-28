from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GatewayRouteTarget:
    r"""GatewayRouteTarget
    An object that represents a gateway route target.
    """
    
    virtual_service: GatewayRouteVirtualService = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualService') }})
    
