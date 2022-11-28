from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPipelineExecutionsOutput:
    r"""ListPipelineExecutionsOutput
    Represents the output of a <code>ListPipelineExecutions</code> action.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    pipeline_execution_summaries: Optional[List[PipelineExecutionSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecutionSummaries') }})
    
