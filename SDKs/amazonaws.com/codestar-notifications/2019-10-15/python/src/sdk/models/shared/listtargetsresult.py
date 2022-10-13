from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import targetsummary


@dataclass_json
@dataclass
class ListTargetsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    targets: Optional[List[targetsummary.TargetSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    
