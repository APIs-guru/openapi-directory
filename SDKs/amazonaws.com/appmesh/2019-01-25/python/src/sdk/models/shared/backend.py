from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Backend:
    r"""Backend
    An object that represents the backends that a virtual node is expected to send outbound traffic to.
    """
    
    virtual_service: Optional[VirtualServiceBackend] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualService') }})
    
