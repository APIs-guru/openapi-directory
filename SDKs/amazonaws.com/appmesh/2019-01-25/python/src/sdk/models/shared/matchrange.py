from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MatchRange:
    end: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    start: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    
