from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualRouterStatus:
    r"""VirtualRouterStatus
    An object that represents the status of a virtual router. 
    """
    
    status: VirtualRouterStatusCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
