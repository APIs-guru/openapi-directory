from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TestEventPatternRequest:
    event: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Event' }})
    event_pattern: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventPattern' }})
    
