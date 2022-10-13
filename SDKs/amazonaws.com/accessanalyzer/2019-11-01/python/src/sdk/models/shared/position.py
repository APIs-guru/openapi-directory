from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Position:
    column: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column' }})
    line: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line' }})
    offset: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    
