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
class LambdaFunctionRecommendation:
    r"""LambdaFunctionRecommendation
    Describes an Lambda function recommendation.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    current_memory_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentMemorySize') }})
    finding: Optional[LambdaFunctionRecommendationFindingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finding') }})
    finding_reason_codes: Optional[List[LambdaFunctionRecommendationFindingReasonCodeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingReasonCodes') }})
    function_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionArn') }})
    function_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionVersion') }})
    last_refresh_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRefreshTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lookback_period_in_days: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookbackPeriodInDays') }})
    memory_size_recommendation_options: Optional[List[LambdaFunctionMemoryRecommendationOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memorySizeRecommendationOptions') }})
    number_of_invocations: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfInvocations') }})
    utilization_metrics: Optional[List[LambdaFunctionUtilizationMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utilizationMetrics') }})
    
