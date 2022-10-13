from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TestReportSummary:
    duration_in_nano_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationInNanoSeconds' }})
    status_counts: dict[str, int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCounts' }})
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
