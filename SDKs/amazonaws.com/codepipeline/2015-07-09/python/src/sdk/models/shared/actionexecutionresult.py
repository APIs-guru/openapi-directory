from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActionExecutionResult:
    r"""ActionExecutionResult
    Execution result information, such as the external execution ID.
    """
    
    external_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalExecutionId') }})
    external_execution_summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalExecutionSummary') }})
    external_execution_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalExecutionUrl') }})
    
