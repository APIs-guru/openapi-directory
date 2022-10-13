from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Queue:
    max_length: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxLength' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    ttl: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    
