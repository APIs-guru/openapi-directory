from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MeAccount:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class MeToken:
    capabilities: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class MeUser:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class Me:
    account: Optional[MeAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    token: Optional[MeToken] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    user: Optional[MeUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
