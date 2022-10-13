from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import taskstatus_enum


@dataclass_json
@dataclass
class TaskListEntry:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    status: Optional[taskstatus_enum.TaskStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskArn' }})
    
