from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RetryStageExecutionInput:
    r"""RetryStageExecutionInput
    Represents the input of a <code>RetryStageExecution</code> action.
    """
    
    pipeline_execution_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecutionId') }})
    pipeline_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineName') }})
    retry_mode: StageRetryModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryMode') }})
    stage_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageName') }})
    
