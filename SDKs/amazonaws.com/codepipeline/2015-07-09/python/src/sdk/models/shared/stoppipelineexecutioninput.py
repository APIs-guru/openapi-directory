from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StopPipelineExecutionInput:
    abandon: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abandon' }})
    pipeline_execution_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineExecutionId' }})
    pipeline_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineName' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    
