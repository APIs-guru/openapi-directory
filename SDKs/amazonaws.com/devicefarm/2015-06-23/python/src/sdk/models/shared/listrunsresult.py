from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import run


@dataclass_json
@dataclass
class ListRunsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    runs: Optional[List[run.Run]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runs' }})
    
