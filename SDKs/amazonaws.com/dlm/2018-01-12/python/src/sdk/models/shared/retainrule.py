from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RetainRule:
    r"""RetainRule
    Specifies the retention rule for a lifecycle policy. You can retain snapshots based on either a count or a time interval.
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Interval') }})
    interval_unit: Optional[RetentionIntervalUnitValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntervalUnit') }})
    
