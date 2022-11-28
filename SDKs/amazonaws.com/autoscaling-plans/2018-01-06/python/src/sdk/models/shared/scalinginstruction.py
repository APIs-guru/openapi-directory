from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScalingInstruction:
    r"""ScalingInstruction
    <p>Describes a scaling instruction for a scalable resource in a scaling plan. Each scaling instruction applies to one resource.</p> <p>AWS Auto Scaling creates target tracking scaling policies based on the scaling instructions. Target tracking scaling policies adjust the capacity of your scalable resource as required to maintain resource utilization at the target value that you specified. </p> <p>AWS Auto Scaling also configures predictive scaling for your Amazon EC2 Auto Scaling groups using a subset of parameters, including the load metric, the scaling metric, the target value for the scaling metric, the predictive scaling mode (forecast and scale or forecast only), and the desired behavior when the forecast capacity exceeds the maximum capacity of the resource. With predictive scaling, AWS Auto Scaling generates forecasts with traffic predictions for the two days ahead and schedules scaling actions that proactively add and remove resource capacity to match the forecast. </p> <important> <p>We recommend waiting a minimum of 24 hours after creating an Auto Scaling group to configure predictive scaling. At minimum, there must be 24 hours of historical data to generate a forecast. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-best-practices.html\">Best Practices for AWS Auto Scaling</a> in the <i>AWS Auto Scaling User Guide</i>.</p> </important>
    """
    
    max_capacity: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxCapacity') }})
    min_capacity: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinCapacity') }})
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    scalable_dimension: ScalableDimensionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalableDimension') }})
    service_namespace: ServiceNamespaceEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNamespace') }})
    target_tracking_configurations: List[TargetTrackingConfiguration] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTrackingConfigurations') }})
    customized_load_metric_specification: Optional[CustomizedLoadMetricSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomizedLoadMetricSpecification') }})
    disable_dynamic_scaling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisableDynamicScaling') }})
    predefined_load_metric_specification: Optional[PredefinedLoadMetricSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredefinedLoadMetricSpecification') }})
    predictive_scaling_max_capacity_behavior: Optional[PredictiveScalingMaxCapacityBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictiveScalingMaxCapacityBehavior') }})
    predictive_scaling_max_capacity_buffer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictiveScalingMaxCapacityBuffer') }})
    predictive_scaling_mode: Optional[PredictiveScalingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictiveScalingMode') }})
    scaling_policy_update_behavior: Optional[ScalingPolicyUpdateBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPolicyUpdateBehavior') }})
    scheduled_action_buffer_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledActionBufferTime') }})
    
