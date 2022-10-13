from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobrun


@dataclass_json
@dataclass
class ListJobRunsResponse:
    job_runs: Optional[List[jobrun.JobRun]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobRuns' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
