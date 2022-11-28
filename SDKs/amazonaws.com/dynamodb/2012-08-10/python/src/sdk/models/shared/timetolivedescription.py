from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TimeToLiveDescription:
    r"""TimeToLiveDescription
    The description of the Time to Live (TTL) status on the specified table. 
    """
    
    attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    time_to_live_status: Optional[TimeToLiveStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeToLiveStatus') }})
    
