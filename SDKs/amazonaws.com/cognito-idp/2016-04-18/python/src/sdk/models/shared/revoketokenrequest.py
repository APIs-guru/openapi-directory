from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RevokeTokenRequest:
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientId' }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientSecret' }})
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Token' }})
    
