from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Segment:
    segment_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentNumber' }})
    total_segments: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalSegments' }})
    
