from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import finding_enum
from . import instancerecommendationfindingreasoncode_enum
from . import instancerecommendationoption
from . import recommendationsource
from . import utilizationmetric


@dataclass_json
@dataclass
class InstanceRecommendation:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    current_instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentInstanceType' }})
    finding: Optional[finding_enum.FindingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finding' }})
    finding_reason_codes: Optional[List[instancerecommendationfindingreasoncode_enum.InstanceRecommendationFindingReasonCodeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingReasonCodes' }})
    instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceArn' }})
    instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceName' }})
    last_refresh_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRefreshTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    look_back_period_in_days: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lookBackPeriodInDays' }})
    recommendation_options: Optional[List[instancerecommendationoption.InstanceRecommendationOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendationOptions' }})
    recommendation_sources: Optional[List[recommendationsource.RecommendationSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendationSources' }})
    utilization_metrics: Optional[List[utilizationmetric.UtilizationMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utilizationMetrics' }})
    
