from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userprofilesummary


@dataclass_json
@dataclass
class ListUserProfilesResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    user_profiles: List[userprofilesummary.UserProfileSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userProfiles' }})
    
