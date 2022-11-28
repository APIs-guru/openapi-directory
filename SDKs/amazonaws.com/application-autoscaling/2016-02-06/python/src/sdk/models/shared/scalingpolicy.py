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
class ScalingPolicy:
    r"""ScalingPolicy
    <p>Represents a scaling policy to use with Application Auto Scaling.</p> <p>For more information about configuring scaling policies for a specific service, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/getting-started.html\">Getting started with Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
    """
    
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    policy_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyARN') }})
    policy_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyName') }})
    policy_type: PolicyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyType') }})
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    scalable_dimension: ScalableDimensionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalableDimension') }})
    service_namespace: ServiceNamespaceEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNamespace') }})
    alarms: Optional[List[Alarm]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alarms') }})
    step_scaling_policy_configuration: Optional[StepScalingPolicyConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepScalingPolicyConfiguration') }})
    target_tracking_scaling_policy_configuration: Optional[TargetTrackingScalingPolicyConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTrackingScalingPolicyConfiguration') }})
    
