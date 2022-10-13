from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeUserResponse:
    user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    
