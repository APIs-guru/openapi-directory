from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssociateTeamMemberRequest:
    project_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    project_role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectRole') }})
    user_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userArn') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    remote_access_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteAccessAllowed') }})
    
