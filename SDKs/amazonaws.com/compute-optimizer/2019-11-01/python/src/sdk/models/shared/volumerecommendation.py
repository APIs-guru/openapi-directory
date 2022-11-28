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
class VolumeRecommendation:
    r"""VolumeRecommendation
    Describes an Amazon Elastic Block Store (Amazon EBS) volume recommendation.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    current_configuration: Optional[VolumeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentConfiguration') }})
    finding: Optional[EbsFindingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finding') }})
    last_refresh_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRefreshTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    look_back_period_in_days: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookBackPeriodInDays') }})
    utilization_metrics: Optional[List[EbsUtilizationMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utilizationMetrics') }})
    volume_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeArn') }})
    volume_recommendation_options: Optional[List[VolumeRecommendationOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeRecommendationOptions') }})
    
