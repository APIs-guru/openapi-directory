from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MetricsSummary:
    findings_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FindingsCount' }})
    metered_lines_of_code_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MeteredLinesOfCodeCount' }})
    
