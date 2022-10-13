from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import testgridsession


@dataclass_json
@dataclass
class ListTestGridSessionsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    test_grid_sessions: Optional[List[testgridsession.TestGridSession]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testGridSessions' }})
    
