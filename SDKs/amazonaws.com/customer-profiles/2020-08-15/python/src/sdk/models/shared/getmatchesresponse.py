from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetMatchesResponse:
    match_generation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchGenerationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    matches: Optional[List[MatchItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Matches') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    potential_matches: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PotentialMatches') }})
    
