from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetEc2RecommendationProjectedMetricsRequest:
    end_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    instance_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceArn') }})
    period: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    start_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stat: MetricStatisticEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stat') }})
    recommendation_preferences: Optional[RecommendationPreferences] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationPreferences') }})
    
