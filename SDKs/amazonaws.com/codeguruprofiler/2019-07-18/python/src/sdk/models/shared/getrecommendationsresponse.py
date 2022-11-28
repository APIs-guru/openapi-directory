from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetRecommendationsResponse:
    r"""GetRecommendationsResponse
    The structure representing the GetRecommendationsResponse.
    """
    
    anomalies: List[Anomaly] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('anomalies') }})
    profile_end_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileEndTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    profile_start_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileStartTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    profiling_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profilingGroupName') }})
    recommendations: List[Recommendation] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendations') }})
    
