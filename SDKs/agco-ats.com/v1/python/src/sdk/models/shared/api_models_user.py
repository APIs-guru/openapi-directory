from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIModelsUser:
    change_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangePassword' }, 'form': { 'field_name': 'ChangePassword' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }, 'form': { 'field_name': 'Email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }, 'form': { 'field_name': 'Name' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }, 'form': { 'field_name': 'Password' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserID' }, 'form': { 'field_name': 'UserID' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }, 'form': { 'field_name': 'Username' }})
    
