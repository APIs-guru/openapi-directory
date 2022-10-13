from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PartialMatch:
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    target_violation_reasons: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetViolationReasons' }})
    
