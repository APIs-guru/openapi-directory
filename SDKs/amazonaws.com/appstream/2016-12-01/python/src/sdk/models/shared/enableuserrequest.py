from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import authenticationtype_enum


@dataclass_json
@dataclass
class EnableUserRequest:
    authentication_type: authenticationtype_enum.AuthenticationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthenticationType' }})
    user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    
