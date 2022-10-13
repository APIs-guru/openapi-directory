from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import reportgroup


@dataclass_json
@dataclass
class UpdateReportGroupOutput:
    report_group: Optional[reportgroup.ReportGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportGroup' }})
    
