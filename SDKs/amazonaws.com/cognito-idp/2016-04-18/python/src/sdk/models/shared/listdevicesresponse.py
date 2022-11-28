from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDevicesResponse:
    r"""ListDevicesResponse
    Represents the response to list devices.
    """
    
    devices: Optional[List[DeviceType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Devices') }})
    pagination_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaginationToken') }})
    
