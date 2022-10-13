from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import memberpermissions_enum


@dataclass_json
@dataclass
class CreateEnvironmentMembershipRequest:
    environment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentId' }})
    permissions: memberpermissions_enum.MemberPermissionsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    user_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userArn' }})
    
