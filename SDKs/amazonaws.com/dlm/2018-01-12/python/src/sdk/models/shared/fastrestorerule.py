from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FastRestoreRule:
    r"""FastRestoreRule
    Specifies a rule for enabling fast snapshot restore. You can enable fast snapshot restore based on either a count or a time interval.
    """
    
    availability_zones: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZones') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Interval') }})
    interval_unit: Optional[RetentionIntervalUnitValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntervalUnit') }})
    
