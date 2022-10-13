from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pipelineexecution


@dataclass_json
@dataclass
class GetPipelineExecutionOutput:
    pipeline_execution: Optional[pipelineexecution.PipelineExecution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineExecution' }})
    
