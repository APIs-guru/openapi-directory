from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import evidence


@dataclass_json
@dataclass
class GetEvidenceResponse:
    evidence: Optional[evidence.Evidence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidence' }})
    
