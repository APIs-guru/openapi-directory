from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListInsightsClosedStatusFilter:
    r"""ListInsightsClosedStatusFilter
     Used to filter for insights that have the status <code>CLOSED</code>. 
    """
    
    end_time_range: EndTimeRange = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTimeRange') }})
    type: InsightTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
