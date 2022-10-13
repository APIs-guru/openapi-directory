from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetViolationDetailsRequest:
    member_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemberAccount' }})
    policy_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyId' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    resource_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    
