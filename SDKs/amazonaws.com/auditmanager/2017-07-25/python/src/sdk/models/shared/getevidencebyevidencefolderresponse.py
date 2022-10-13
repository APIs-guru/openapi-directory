from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import evidence


@dataclass_json
@dataclass
class GetEvidenceByEvidenceFolderResponse:
    evidence: Optional[List[evidence.Evidence]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidence' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
