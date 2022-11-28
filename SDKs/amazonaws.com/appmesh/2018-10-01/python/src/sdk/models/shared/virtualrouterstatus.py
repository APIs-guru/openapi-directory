from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualRouterStatus:
    r"""VirtualRouterStatus
    An object representing the status of a virtual router. 
    """
    
    status: Optional[VirtualRouterStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
