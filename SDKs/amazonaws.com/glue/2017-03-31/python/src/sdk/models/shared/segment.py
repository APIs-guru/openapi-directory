from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Segment:
    r"""Segment
    Defines a non-overlapping region of a table's partitions, allowing multiple requests to be run in parallel.
    """
    
    segment_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentNumber') }})
    total_segments: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalSegments') }})
    
