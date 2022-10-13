from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetOpenIDTokenForDeveloperIdentityInput:
    identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityId' }})
    identity_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityPoolId' }})
    logins: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Logins' }})
    principal_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrincipalTags' }})
    token_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TokenDuration' }})
    
