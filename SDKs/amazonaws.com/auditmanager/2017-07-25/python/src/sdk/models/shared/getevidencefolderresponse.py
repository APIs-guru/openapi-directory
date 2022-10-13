from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import assessmentevidencefolder


@dataclass_json
@dataclass
class GetEvidenceFolderResponse:
    evidence_folder: Optional[assessmentevidencefolder.AssessmentEvidenceFolder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceFolder' }})
    
