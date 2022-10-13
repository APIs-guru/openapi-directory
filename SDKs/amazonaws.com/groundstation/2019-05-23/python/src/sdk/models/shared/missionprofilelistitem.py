from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MissionProfileListItem:
    mission_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missionProfileArn' }})
    mission_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missionProfileId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    
