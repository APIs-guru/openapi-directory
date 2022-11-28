from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CloudWatchAlarmDefinition:
    r"""CloudWatchAlarmDefinition
    The definition of a CloudWatch metric alarm, which determines when an automatic scaling activity is triggered. When the defined alarm conditions are satisfied, scaling activity begins.
    """
    
    comparison_operator: ComparisonOperatorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComparisonOperator') }})
    metric_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    period: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Period') }})
    threshold: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Threshold') }})
    dimensions: Optional[List[MetricDimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    evaluation_periods: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationPeriods') }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Namespace') }})
    statistic: Optional[StatisticEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Statistic') }})
    unit: Optional[UnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    
