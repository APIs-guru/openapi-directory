from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import changelog


@dataclass_json
@dataclass
class GetChangeLogsResponse:
    change_logs: Optional[List[changelog.ChangeLog]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changeLogs' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
