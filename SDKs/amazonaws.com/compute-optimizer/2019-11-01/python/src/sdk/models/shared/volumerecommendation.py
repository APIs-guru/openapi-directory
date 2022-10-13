from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import volumeconfiguration
from . import ebsfinding_enum
from . import ebsutilizationmetric
from . import volumerecommendationoption


@dataclass_json
@dataclass
class VolumeRecommendation:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    current_configuration: Optional[volumeconfiguration.VolumeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentConfiguration' }})
    finding: Optional[ebsfinding_enum.EbsFindingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finding' }})
    last_refresh_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRefreshTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    look_back_period_in_days: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lookBackPeriodInDays' }})
    utilization_metrics: Optional[List[ebsutilizationmetric.EbsUtilizationMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utilizationMetrics' }})
    volume_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeArn' }})
    volume_recommendation_options: Optional[List[volumerecommendationoption.VolumeRecommendationOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeRecommendationOptions' }})
    
