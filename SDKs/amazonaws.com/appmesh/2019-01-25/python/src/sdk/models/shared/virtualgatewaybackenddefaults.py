from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualGatewayBackendDefaults:
    r"""VirtualGatewayBackendDefaults
    An object that represents the default properties for a backend.
    """
    
    client_policy: Optional[VirtualGatewayClientPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientPolicy') }})
    
