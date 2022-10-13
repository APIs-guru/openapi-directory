from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIModelsAuthenticatedUser:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }})
    mac_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MACId' }})
    mac_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MACToken' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Token' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserID' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
