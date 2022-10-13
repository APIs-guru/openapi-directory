from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batchimportevidencetoassessmentcontrolerror


@dataclass_json
@dataclass
class BatchImportEvidenceToAssessmentControlResponse:
    errors: Optional[List[batchimportevidencetoassessmentcontrolerror.BatchImportEvidenceToAssessmentControlError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
