from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import taskstatustype_enum


@dataclass_json
@dataclass
class CancelMlTaskRunResponse:
    status: Optional[taskstatustype_enum.TaskStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    task_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskRunId' }})
    transform_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformId' }})
    
