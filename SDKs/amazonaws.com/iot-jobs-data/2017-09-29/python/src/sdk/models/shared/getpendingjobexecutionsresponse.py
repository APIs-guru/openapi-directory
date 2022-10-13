from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobexecutionsummary
from . import jobexecutionsummary


@dataclass_json
@dataclass
class GetPendingJobExecutionsResponse:
    in_progress_jobs: Optional[List[jobexecutionsummary.JobExecutionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inProgressJobs' }})
    queued_jobs: Optional[List[jobexecutionsummary.JobExecutionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queuedJobs' }})
    
