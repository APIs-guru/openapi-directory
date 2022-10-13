from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import assessmentreport


@dataclass_json
@dataclass
class CreateAssessmentReportResponse:
    assessment_report: Optional[assessmentreport.AssessmentReport] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentReport' }})
    
