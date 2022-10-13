from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AdminSetUserPasswordRequest:
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    permanent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permanent' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
