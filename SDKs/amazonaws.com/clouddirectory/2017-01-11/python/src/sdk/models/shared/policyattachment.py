from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PolicyAttachment:
    object_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectIdentifier' }})
    policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyId' }})
    policy_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyType' }})
    
