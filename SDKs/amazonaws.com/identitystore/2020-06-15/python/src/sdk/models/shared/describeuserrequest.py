from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeUserRequest:
    identity_store_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityStoreId' }})
    user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    
