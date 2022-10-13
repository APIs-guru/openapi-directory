from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IamActionDefinition:
    groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Groups' }})
    policy_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyArn' }})
    roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Roles' }})
    users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Users' }})
    
