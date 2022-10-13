from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datarepositorytask


@dataclass_json
@dataclass
class DescribeDataRepositoryTasksResponse:
    data_repository_tasks: Optional[List[datarepositorytask.DataRepositoryTask]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataRepositoryTasks' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
