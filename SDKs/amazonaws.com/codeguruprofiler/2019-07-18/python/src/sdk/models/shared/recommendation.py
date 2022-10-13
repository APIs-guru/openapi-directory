from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from . import pattern
from . import match


@dataclass_json
@dataclass
class Recommendation:
    all_matches_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allMatchesCount' }})
    all_matches_sum: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allMatchesSum' }})
    end_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pattern: pattern.Pattern = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pattern' }})
    start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    top_matches: List[match.Match] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topMatches' }})
    
