from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import autoscalinggroupconfiguration
from . import finding_enum
from . import autoscalinggrouprecommendationoption
from . import utilizationmetric


@dataclass_json
@dataclass
class AutoScalingGroupRecommendation:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    auto_scaling_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoScalingGroupArn' }})
    auto_scaling_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoScalingGroupName' }})
    current_configuration: Optional[autoscalinggroupconfiguration.AutoScalingGroupConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentConfiguration' }})
    finding: Optional[finding_enum.FindingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finding' }})
    last_refresh_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRefreshTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    look_back_period_in_days: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lookBackPeriodInDays' }})
    recommendation_options: Optional[List[autoscalinggrouprecommendationoption.AutoScalingGroupRecommendationOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendationOptions' }})
    utilization_metrics: Optional[List[utilizationmetric.UtilizationMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utilizationMetrics' }})
    
