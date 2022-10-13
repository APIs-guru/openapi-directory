from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import lambdafunctionrecommendationfinding_enum
from . import lambdafunctionrecommendationfindingreasoncode_enum
from . import lambdafunctionmemoryrecommendationoption
from . import lambdafunctionutilizationmetric


@dataclass_json
@dataclass
class LambdaFunctionRecommendation:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    current_memory_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentMemorySize' }})
    finding: Optional[lambdafunctionrecommendationfinding_enum.LambdaFunctionRecommendationFindingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finding' }})
    finding_reason_codes: Optional[List[lambdafunctionrecommendationfindingreasoncode_enum.LambdaFunctionRecommendationFindingReasonCodeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingReasonCodes' }})
    function_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionArn' }})
    function_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionVersion' }})
    last_refresh_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRefreshTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lookback_period_in_days: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lookbackPeriodInDays' }})
    memory_size_recommendation_options: Optional[List[lambdafunctionmemoryrecommendationoption.LambdaFunctionMemoryRecommendationOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memorySizeRecommendationOptions' }})
    number_of_invocations: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfInvocations' }})
    utilization_metrics: Optional[List[lambdafunctionutilizationmetric.LambdaFunctionUtilizationMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utilizationMetrics' }})
    
