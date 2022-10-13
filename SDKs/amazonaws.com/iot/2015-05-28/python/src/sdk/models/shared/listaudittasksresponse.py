from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import audittaskmetadata


@dataclass_json
@dataclass
class ListAuditTasksResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    tasks: Optional[List[audittaskmetadata.AuditTaskMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tasks' }})
    
