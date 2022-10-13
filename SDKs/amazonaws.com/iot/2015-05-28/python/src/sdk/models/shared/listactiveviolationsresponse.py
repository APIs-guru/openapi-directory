from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import activeviolation


@dataclass_json
@dataclass
class ListActiveViolationsResponse:
    active_violations: Optional[List[activeviolation.ActiveViolation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeViolations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
