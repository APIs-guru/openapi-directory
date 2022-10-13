from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AdminDeleteUserAttributesRequest:
    user_attribute_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserAttributeNames' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
