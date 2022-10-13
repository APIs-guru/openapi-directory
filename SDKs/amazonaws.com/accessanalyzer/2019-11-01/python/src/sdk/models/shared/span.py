from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import position
from . import position


@dataclass_json
@dataclass
class Span:
    end: position.Position = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    start: position.Position = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    
