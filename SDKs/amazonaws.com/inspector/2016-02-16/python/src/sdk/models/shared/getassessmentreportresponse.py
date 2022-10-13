from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import reportstatus_enum


@dataclass_json
@dataclass
class GetAssessmentReportResponse:
    status: reportstatus_enum.ReportStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
