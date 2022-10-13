from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobsummary


@dataclass_json
@dataclass
class ListJobsResponse:
    job_summary_list: List[jobsummary.JobSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobSummaryList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
