from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListMissionProfilesResponse:
    r"""ListMissionProfilesResponse
    <p/>
    """
    
    mission_profile_list: Optional[List[MissionProfileListItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missionProfileList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
