from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutScalingPolicyInput:
    r"""PutScalingPolicyInput
    Represents the input for a request operation.
    """
    
    fleet_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    metric_name: MetricNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    comparison_operator: Optional[ComparisonOperatorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComparisonOperator') }})
    evaluation_periods: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationPeriods') }})
    policy_type: Optional[PolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyType') }})
    scaling_adjustment: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingAdjustment') }})
    scaling_adjustment_type: Optional[ScalingAdjustmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingAdjustmentType') }})
    target_configuration: Optional[TargetConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetConfiguration') }})
    threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Threshold') }})
    
