from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import profiletime


@dataclass_json
@dataclass
class ListProfileTimesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    profile_times: List[profiletime.ProfileTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileTimes' }})
    
