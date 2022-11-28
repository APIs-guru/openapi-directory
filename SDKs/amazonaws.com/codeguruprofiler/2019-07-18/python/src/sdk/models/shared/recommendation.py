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
class Recommendation:
    r"""Recommendation
    A potential improvement that was found from analyzing the profiling data.
    """
    
    all_matches_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allMatchesCount') }})
    all_matches_sum: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allMatchesSum') }})
    end_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pattern: Pattern = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pattern') }})
    start_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    top_matches: List[Match] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topMatches') }})
    
