from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import controlcomment
from . import controlresponse_enum
from . import controlstatus_enum


@dataclass_json
@dataclass
class AssessmentControl:
    assessment_report_evidence_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentReportEvidenceCount' }})
    comments: Optional[List[controlcomment.ControlComment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    evidence_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceCount' }})
    evidence_sources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceSources' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    response: Optional[controlresponse_enum.ControlResponseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    status: Optional[controlstatus_enum.ControlStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
