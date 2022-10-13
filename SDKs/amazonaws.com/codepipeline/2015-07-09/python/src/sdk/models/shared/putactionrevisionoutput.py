from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutActionRevisionOutput:
    new_revision: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newRevision' }})
    pipeline_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineExecutionId' }})
    
