from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import stageretrymode_enum


@dataclass_json
@dataclass
class RetryStageExecutionInput:
    pipeline_execution_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineExecutionId' }})
    pipeline_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineName' }})
    retry_mode: stageretrymode_enum.StageRetryModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryMode' }})
    stage_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageName' }})
    
