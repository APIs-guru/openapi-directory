from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pipelineobject


@dataclass_json
@dataclass
class TaskObject:
    attempt_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attemptId' }})
    objects: Optional[dict[str, pipelineobject.PipelineObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objects' }})
    pipeline_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineId' }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskId' }})
    
