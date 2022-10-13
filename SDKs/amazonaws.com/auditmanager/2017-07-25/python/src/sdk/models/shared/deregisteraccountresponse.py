from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import accountstatus_enum


@dataclass_json
@dataclass
class DeregisterAccountResponse:
    status: Optional[accountstatus_enum.AccountStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
