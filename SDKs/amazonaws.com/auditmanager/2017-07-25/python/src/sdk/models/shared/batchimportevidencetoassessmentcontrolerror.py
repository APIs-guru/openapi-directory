from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import manualevidence


@dataclass_json
@dataclass
class BatchImportEvidenceToAssessmentControlError:
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    manual_evidence: Optional[manualevidence.ManualEvidence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manualEvidence' }})
    
