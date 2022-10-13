from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import matchitem


@dataclass_json
@dataclass
class GetMatchesResponse:
    match_generation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchGenerationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    matches: Optional[List[matchitem.MatchItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Matches' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    potential_matches: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PotentialMatches' }})
    
