from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExecutionProperty:
    r"""ExecutionProperty
    An execution property of a job.
    """
    
    max_concurrent_runs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxConcurrentRuns') }})
    
