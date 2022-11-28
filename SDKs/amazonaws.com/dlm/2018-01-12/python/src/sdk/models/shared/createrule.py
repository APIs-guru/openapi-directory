from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateRule:
    r"""CreateRule
    <p>Specifies when to create snapshots of EBS volumes.</p> <p>You must specify either a Cron expression or an interval, interval unit, and start time. You cannot specify both.</p>
    """
    
    cron_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CronExpression') }})
    interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Interval') }})
    interval_unit: Optional[IntervalUnitValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntervalUnit') }})
    location: Optional[LocationValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    times: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Times') }})
    
