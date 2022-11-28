from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobExecutionSummaryForThing:
    r"""JobExecutionSummaryForThing
    The job execution summary for a thing.
    """
    
    job_execution_summary: Optional[JobExecutionSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobExecutionSummary') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    
