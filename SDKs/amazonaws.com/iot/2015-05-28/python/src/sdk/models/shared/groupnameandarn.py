from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupNameAndArn:
    group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupArn' }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupName' }})
    
