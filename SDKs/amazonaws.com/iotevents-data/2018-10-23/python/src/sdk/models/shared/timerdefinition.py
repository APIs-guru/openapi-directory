from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimerDefinition:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seconds' }})
    
