from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import suite


@dataclass_json
@dataclass
class ListSuitesResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    suites: Optional[List[suite.Suite]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suites' }})
    
