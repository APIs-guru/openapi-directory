from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetCredentialsForIdentityInput:
    custom_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomRoleArn' }})
    identity_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityId' }})
    logins: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Logins' }})
    
