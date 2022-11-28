from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LambdaFunctionUtilizationMetric:
    r"""LambdaFunctionUtilizationMetric
    Describes a utilization metric of an Lambda function.
    """
    
    name: Optional[LambdaFunctionMetricNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    statistic: Optional[LambdaFunctionMetricStatisticEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistic') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
