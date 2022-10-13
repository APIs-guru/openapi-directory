from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import authtype_enum
from . import servertype_enum


@dataclass_json
@dataclass
class SourceCredentialsInfo:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    auth_type: Optional[authtype_enum.AuthTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authType' }})
    server_type: Optional[servertype_enum.ServerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverType' }})
    
