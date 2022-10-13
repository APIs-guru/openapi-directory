from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import taskfield_enum


@dataclass_json
@dataclass
class DescribeTasksRequest:
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    include: Optional[List[taskfield_enum.TaskFieldEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include' }})
    tasks: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tasks' }})
    
