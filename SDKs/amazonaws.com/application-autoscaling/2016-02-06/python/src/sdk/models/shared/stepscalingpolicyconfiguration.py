from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StepScalingPolicyConfiguration:
    r"""StepScalingPolicyConfiguration
    Represents a step scaling policy configuration to use with Application Auto Scaling.
    """
    
    adjustment_type: Optional[AdjustmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdjustmentType') }})
    cooldown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cooldown') }})
    metric_aggregation_type: Optional[MetricAggregationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricAggregationType') }})
    min_adjustment_magnitude: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinAdjustmentMagnitude') }})
    step_adjustments: Optional[List[StepAdjustment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepAdjustments') }})
    
