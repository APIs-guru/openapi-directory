from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import missionprofilelistitem


@dataclass_json
@dataclass
class ListMissionProfilesResponse:
    mission_profile_list: Optional[List[missionprofilelistitem.MissionProfileListItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missionProfileList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
