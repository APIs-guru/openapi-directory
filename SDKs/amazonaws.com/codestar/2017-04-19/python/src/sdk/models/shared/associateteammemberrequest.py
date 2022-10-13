from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssociateTeamMemberRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    project_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    project_role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectRole' }})
    remote_access_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteAccessAllowed' }})
    user_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userArn' }})
    
