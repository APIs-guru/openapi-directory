from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExecutionDetails:
    r"""ExecutionDetails
    The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline.
    """
    
    external_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalExecutionId') }})
    percent_complete: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentComplete') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
