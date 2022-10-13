from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import securityservicetype_enum


@dataclass_json
@dataclass
class SecurityServicePolicyData:
    managed_service_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManagedServiceData' }})
    type: securityservicetype_enum.SecurityServiceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
