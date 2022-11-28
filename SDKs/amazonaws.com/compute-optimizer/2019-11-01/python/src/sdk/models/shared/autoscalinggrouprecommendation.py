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
class AutoScalingGroupRecommendation:
    r"""AutoScalingGroupRecommendation
    Describes an Auto Scaling group recommendation.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    auto_scaling_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroupArn') }})
    auto_scaling_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroupName') }})
    current_configuration: Optional[AutoScalingGroupConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentConfiguration') }})
    finding: Optional[FindingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finding') }})
    last_refresh_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRefreshTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    look_back_period_in_days: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookBackPeriodInDays') }})
    recommendation_options: Optional[List[AutoScalingGroupRecommendationOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationOptions') }})
    utilization_metrics: Optional[List[UtilizationMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utilizationMetrics') }})
    
