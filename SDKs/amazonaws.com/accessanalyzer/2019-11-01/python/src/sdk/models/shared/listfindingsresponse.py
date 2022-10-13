from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import findingsummary


@dataclass_json
@dataclass
class ListFindingsResponse:
    findings: List[findingsummary.FindingSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findings' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
