from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assessmentreportevidenceerror


@dataclass_json
@dataclass
class BatchDisassociateAssessmentReportEvidenceResponse:
    errors: Optional[List[assessmentreportevidenceerror.AssessmentReportEvidenceError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    evidence_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceIds' }})
    
