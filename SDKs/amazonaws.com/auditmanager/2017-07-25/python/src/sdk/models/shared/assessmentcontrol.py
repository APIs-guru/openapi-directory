from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssessmentControl:
    r"""AssessmentControl
     The control entity that represents a standard or custom control used in an Audit Manager assessment. 
    """
    
    assessment_report_evidence_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentReportEvidenceCount') }})
    comments: Optional[List[ControlComment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    evidence_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceCount') }})
    evidence_sources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceSources') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    response: Optional[ControlResponseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status: Optional[ControlStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
