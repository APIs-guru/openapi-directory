from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RepositoryTriggerExecutionFailure:
    r"""RepositoryTriggerExecutionFailure
    A trigger failed to run.
    """
    
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureMessage') }})
    trigger: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger') }})
    
