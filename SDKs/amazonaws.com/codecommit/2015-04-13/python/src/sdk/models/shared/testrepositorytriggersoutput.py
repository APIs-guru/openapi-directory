from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestRepositoryTriggersOutput:
    r"""TestRepositoryTriggersOutput
    Represents the output of a test repository triggers operation.
    """
    
    failed_executions: Optional[List[RepositoryTriggerExecutionFailure]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedExecutions') }})
    successful_executions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successfulExecutions') }})
    
