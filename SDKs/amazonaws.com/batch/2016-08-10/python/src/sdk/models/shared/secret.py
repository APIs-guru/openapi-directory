from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Secret:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value_from: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueFrom' }})
    
