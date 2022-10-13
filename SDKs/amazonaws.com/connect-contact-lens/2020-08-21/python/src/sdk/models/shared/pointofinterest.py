from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PointOfInterest:
    begin_offset_millis: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BeginOffsetMillis' }})
    end_offset_millis: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndOffsetMillis' }})
    
