from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListPipelineExecutionsInput:
    r"""ListPipelineExecutionsInput
    Represents the input of a <code>ListPipelineExecutions</code> action.
    """
    
    pipeline_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineName') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
