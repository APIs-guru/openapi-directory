from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetPipelineExecutionInput:
    r"""GetPipelineExecutionInput
    Represents the input of a <code>GetPipelineExecution</code> action.
    """
    
    pipeline_execution_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecutionId') }})
    pipeline_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineName') }})
    
