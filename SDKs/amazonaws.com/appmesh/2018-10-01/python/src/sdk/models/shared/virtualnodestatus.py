from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualNodeStatus:
    r"""VirtualNodeStatus
    An object representing the current status of the virtual node.
    """
    
    status: Optional[VirtualNodeStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
