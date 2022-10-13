from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import roletype_enum


@dataclass_json
@dataclass
class Role:
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    role_type: Optional[roletype_enum.RoleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleType' }})
    
