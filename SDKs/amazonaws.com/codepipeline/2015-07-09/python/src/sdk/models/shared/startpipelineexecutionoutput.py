from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartPipelineExecutionOutput:
    r"""StartPipelineExecutionOutput
    Represents the output of a <code>StartPipelineExecution</code> action.
    """
    
    pipeline_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecutionId') }})
    
