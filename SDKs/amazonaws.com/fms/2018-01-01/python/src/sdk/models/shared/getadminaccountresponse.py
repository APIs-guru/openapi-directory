from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import accountrolestatus_enum


@dataclass_json
@dataclass
class GetAdminAccountResponse:
    admin_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdminAccount' }})
    role_status: Optional[accountrolestatus_enum.AccountRoleStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleStatus' }})
    
