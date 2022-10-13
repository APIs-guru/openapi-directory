from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OAuthProperties:
    auth_code_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authCodeUrl' }})
    o_auth_scopes: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oAuthScopes' }})
    token_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenUrl' }})
    
