from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import importtask


@dataclass_json
@dataclass
class DescribeImportTasksResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    tasks: Optional[List[importtask.ImportTask]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tasks' }})
    
