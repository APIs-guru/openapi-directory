from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import status_enum


@dataclass_json
@dataclass
class UpdateEnrollmentStatusRequest:
    include_member_accounts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeMemberAccounts' }})
    status: status_enum.StatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
