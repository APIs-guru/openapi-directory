from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reportgroup


@dataclass_json
@dataclass
class BatchGetReportGroupsOutput:
    report_groups: Optional[List[reportgroup.ReportGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportGroups' }})
    report_groups_not_found: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportGroupsNotFound' }})
    
