from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StageExecution:
    r"""StageExecution
    Represents information about the run of a stage.
    """
    
    pipeline_execution_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecutionId') }})
    status: StageExecutionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
