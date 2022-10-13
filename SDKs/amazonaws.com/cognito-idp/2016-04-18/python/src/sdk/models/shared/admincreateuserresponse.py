from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import usertype


@dataclass_json
@dataclass
class AdminCreateUserResponse:
    user: Optional[usertype.UserType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'User' }})
    
