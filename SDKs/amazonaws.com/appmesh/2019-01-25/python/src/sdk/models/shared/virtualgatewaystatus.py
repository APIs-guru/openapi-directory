from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualGatewayStatus:
    r"""VirtualGatewayStatus
    An object that represents the status of the mesh resource.
    """
    
    status: VirtualGatewayStatusCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
