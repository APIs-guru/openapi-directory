from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tasklistentry


@dataclass_json
@dataclass
class ListTasksResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    tasks: Optional[List[tasklistentry.TaskListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tasks' }})
    
