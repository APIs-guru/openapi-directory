from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDeviceResult:
    r"""GetDeviceResult
    Represents the result of a get device request.
    """
    
    device: Optional[Device] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    
