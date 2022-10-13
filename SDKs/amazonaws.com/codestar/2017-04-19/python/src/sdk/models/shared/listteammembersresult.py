from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import teammember


@dataclass_json
@dataclass
class ListTeamMembersResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    team_members: List[teammember.TeamMember] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamMembers' }})
    
