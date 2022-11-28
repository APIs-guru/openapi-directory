from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDevicesRequest:
    r"""ListDevicesRequest
    Represents the result of a list devices request.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    filters: Optional[List[DeviceFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
