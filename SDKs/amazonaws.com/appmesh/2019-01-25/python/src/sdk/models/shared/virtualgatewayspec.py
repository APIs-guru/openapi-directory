from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualGatewaySpec:
    r"""VirtualGatewaySpec
    An object that represents the specification of a service mesh resource.
    """
    
    listeners: List[VirtualGatewayListener] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listeners') }})
    backend_defaults: Optional[VirtualGatewayBackendDefaults] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backendDefaults') }})
    logging: Optional[VirtualGatewayLogging] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logging') }})
    
