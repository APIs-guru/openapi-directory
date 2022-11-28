from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeTimeToLiveOutput:
    time_to_live_description: Optional[TimeToLiveDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeToLiveDescription') }})
    
