from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assessmentevidencefolder


@dataclass_json
@dataclass
class GetEvidenceFoldersByAssessmentControlResponse:
    evidence_folders: Optional[List[assessmentevidencefolder.AssessmentEvidenceFolder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceFolders' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
