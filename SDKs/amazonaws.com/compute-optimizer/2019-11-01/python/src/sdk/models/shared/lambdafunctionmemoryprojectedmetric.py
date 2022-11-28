from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LambdaFunctionMemoryProjectedMetric:
    r"""LambdaFunctionMemoryProjectedMetric
    Describes a projected utilization metric of an Lambda function recommendation option.
    """
    
    name: Optional[LambdaFunctionMemoryMetricNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    statistic: Optional[LambdaFunctionMemoryMetricStatisticEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistic') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
