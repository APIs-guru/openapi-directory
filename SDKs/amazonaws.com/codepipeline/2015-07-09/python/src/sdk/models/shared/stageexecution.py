from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import stageexecutionstatus_enum


@dataclass_json
@dataclass
class StageExecution:
    pipeline_execution_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineExecutionId' }})
    status: stageexecutionstatus_enum.StageExecutionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
