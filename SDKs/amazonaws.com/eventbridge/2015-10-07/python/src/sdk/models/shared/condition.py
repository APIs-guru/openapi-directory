from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Condition:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
