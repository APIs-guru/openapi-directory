from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UtilizationMetric:
    r"""UtilizationMetric
    <p>Describes a utilization metric of a resource, such as an Amazon EC2 instance.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p>
    """
    
    name: Optional[MetricNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    statistic: Optional[MetricStatisticEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistic') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
