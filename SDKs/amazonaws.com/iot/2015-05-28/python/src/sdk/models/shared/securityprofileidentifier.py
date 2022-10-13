from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SecurityProfileIdentifier:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
