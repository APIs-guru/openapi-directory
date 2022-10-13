from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import securityservicetype_enum


@dataclass_json
@dataclass
class GetProtectionStatusResponse:
    admin_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdminAccountId' }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    service_type: Optional[securityservicetype_enum.SecurityServiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceType' }})
    
