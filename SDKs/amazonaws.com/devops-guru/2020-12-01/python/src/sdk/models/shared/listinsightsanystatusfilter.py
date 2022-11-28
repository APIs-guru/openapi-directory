from dataclasses import dataclass, field
from typing import Any
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListInsightsAnyStatusFilter:
    r"""ListInsightsAnyStatusFilter
     Used to filter for insights that have any status. 
    """
    
    start_time_range: StartTimeRange = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTimeRange') }})
    type: InsightTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
