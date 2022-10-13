from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import report


@dataclass_json
@dataclass
class BatchGetReportsOutput:
    reports: Optional[List[report.Report]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reports' }})
    reports_not_found: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportsNotFound' }})
    
