from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BehaviorCriteria:
    r"""BehaviorCriteria
    The criteria by which the behavior is determined to be normal.
    """
    
    comparison_operator: Optional[ComparisonOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonOperator') }})
    consecutive_datapoints_to_alarm: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consecutiveDatapointsToAlarm') }})
    consecutive_datapoints_to_clear: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consecutiveDatapointsToClear') }})
    duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationSeconds') }})
    ml_detection_config: Optional[MachineLearningDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mlDetectionConfig') }})
    statistical_threshold: Optional[StatisticalThreshold] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statisticalThreshold') }})
    value: Optional[MetricValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
