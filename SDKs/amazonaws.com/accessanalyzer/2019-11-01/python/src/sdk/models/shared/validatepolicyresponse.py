from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import validatepolicyfinding


@dataclass_json
@dataclass
class ValidatePolicyResponse:
    findings: List[validatepolicyfinding.ValidatePolicyFinding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findings' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
