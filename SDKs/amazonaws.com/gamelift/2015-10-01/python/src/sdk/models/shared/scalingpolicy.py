from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScalingPolicy:
    r"""ScalingPolicy
    <p>Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetCapacity</a> | <a>UpdateFleetCapacity</a> | <a>DescribeEC2InstanceLimits</a> | <a>PutScalingPolicy</a> | <a>DescribeScalingPolicies</a> | <a>DeleteScalingPolicy</a> | <a>StopFleetActions</a> | <a>StartFleetActions</a> | <a href=\"https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets\">All APIs by task</a> </p>
    """
    
    comparison_operator: Optional[ComparisonOperatorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComparisonOperator') }})
    evaluation_periods: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationPeriods') }})
    fleet_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetArn') }})
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    metric_name: Optional[MetricNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    policy_type: Optional[PolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyType') }})
    scaling_adjustment: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingAdjustment') }})
    scaling_adjustment_type: Optional[ScalingAdjustmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingAdjustmentType') }})
    status: Optional[ScalingStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    target_configuration: Optional[TargetConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetConfiguration') }})
    threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Threshold') }})
    update_status: Optional[LocationUpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateStatus') }})
    
