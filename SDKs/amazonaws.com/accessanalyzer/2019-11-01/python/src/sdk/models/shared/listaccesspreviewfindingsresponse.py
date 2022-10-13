from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accesspreviewfinding


@dataclass_json
@dataclass
class ListAccessPreviewFindingsResponse:
    findings: List[accesspreviewfinding.AccessPreviewFinding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findings' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
