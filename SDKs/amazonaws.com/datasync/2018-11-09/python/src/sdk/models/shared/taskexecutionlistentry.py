from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import taskexecutionstatus_enum


@dataclass_json
@dataclass
class TaskExecutionListEntry:
    status: Optional[taskexecutionstatus_enum.TaskExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    task_execution_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskExecutionArn' }})
    
