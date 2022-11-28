from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WorkflowRunStatistics:
    r"""WorkflowRunStatistics
    Workflow run statistics provides statistics about the workflow run.
    """
    
    failed_actions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedActions') }})
    running_actions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunningActions') }})
    stopped_actions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppedActions') }})
    succeeded_actions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SucceededActions') }})
    timeout_actions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeoutActions') }})
    total_actions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalActions') }})
    
