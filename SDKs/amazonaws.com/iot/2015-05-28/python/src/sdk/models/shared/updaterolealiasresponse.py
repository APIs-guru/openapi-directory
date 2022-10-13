from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateRoleAliasResponse:
    role_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleAlias' }})
    role_alias_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleAliasArn' }})
    
