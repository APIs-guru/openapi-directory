from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListInsightsOngoingStatusFilter:
    r"""ListInsightsOngoingStatusFilter
     Used to filter for insights that have the status <code>ONGOING</code>. 
    """
    
    type: InsightTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
