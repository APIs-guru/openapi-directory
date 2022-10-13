from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import authtype_enum
from . import servertype_enum


@dataclass_json
@dataclass
class ImportSourceCredentialsInput:
    auth_type: authtype_enum.AuthTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authType' }})
    server_type: servertype_enum.ServerTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverType' }})
    should_overwrite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shouldOverwrite' }})
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
