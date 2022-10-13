from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import findingsreportsummary


@dataclass_json
@dataclass
class ListFindingsReportsResponse:
    findings_report_summaries: List[findingsreportsummary.FindingsReportSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingsReportSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
