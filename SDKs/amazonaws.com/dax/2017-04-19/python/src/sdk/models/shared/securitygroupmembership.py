from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SecurityGroupMembership:
    security_group_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIdentifier' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
