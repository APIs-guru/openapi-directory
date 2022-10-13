from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateUserProfileRequest:
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    email_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    ssh_public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sshPublicKey' }})
    user_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userArn' }})
    
