from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssessmentReportEvidenceError:
    r"""AssessmentReportEvidenceError
     An error entity for the <code>AssessmentReportEvidence</code> API. This is used to provide more meaningful errors than a simple string message. 
    """
    
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    evidence_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceId') }})
    
