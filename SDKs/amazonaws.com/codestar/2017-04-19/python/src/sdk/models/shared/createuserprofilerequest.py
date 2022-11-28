from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateUserProfileRequest:
    display_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email_address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    user_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userArn') }})
    ssh_public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshPublicKey') }})
    
