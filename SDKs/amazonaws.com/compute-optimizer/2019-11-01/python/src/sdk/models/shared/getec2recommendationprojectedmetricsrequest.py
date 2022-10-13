from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import recommendationpreferences
from . import metricstatistic_enum


@dataclass_json
@dataclass
class GetEc2RecommendationProjectedMetricsRequest:
    end_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceArn' }})
    period: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    recommendation_preferences: Optional[recommendationpreferences.RecommendationPreferences] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendationPreferences' }})
    start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stat: metricstatistic_enum.MetricStatisticEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stat' }})
    
