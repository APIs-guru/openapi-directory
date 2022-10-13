from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateTeamMemberResult:
    project_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectRole' }})
    remote_access_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteAccessAllowed' }})
    user_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userArn' }})
    
