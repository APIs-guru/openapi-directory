from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetPendingJobExecutionsResponse:
    in_progress_jobs: Optional[List[JobExecutionSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inProgressJobs') }})
    queued_jobs: Optional[List[JobExecutionSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queuedJobs') }})
    
