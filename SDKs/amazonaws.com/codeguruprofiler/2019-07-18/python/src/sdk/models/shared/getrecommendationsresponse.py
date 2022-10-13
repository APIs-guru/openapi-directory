from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from . import anomaly
from . import recommendation


@dataclass_json
@dataclass
class GetRecommendationsResponse:
    anomalies: List[anomaly.Anomaly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anomalies' }})
    profile_end_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    profile_start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    profiling_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profilingGroupName' }})
    recommendations: List[recommendation.Recommendation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendations' }})
    
