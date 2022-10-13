from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assessmentreportmetadata


@dataclass_json
@dataclass
class ListAssessmentReportsResponse:
    assessment_reports: Optional[List[assessmentreportmetadata.AssessmentReportMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentReports' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
