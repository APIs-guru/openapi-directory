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
class InstanceRecommendation:
    r"""InstanceRecommendation
    Describes an Amazon EC2 instance recommendation.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    current_instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentInstanceType') }})
    finding: Optional[FindingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finding') }})
    finding_reason_codes: Optional[List[InstanceRecommendationFindingReasonCodeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingReasonCodes') }})
    instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceArn') }})
    instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceName') }})
    last_refresh_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRefreshTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    look_back_period_in_days: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookBackPeriodInDays') }})
    recommendation_options: Optional[List[InstanceRecommendationOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationOptions') }})
    recommendation_sources: Optional[List[RecommendationSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationSources') }})
    utilization_metrics: Optional[List[UtilizationMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utilizationMetrics') }})
    
