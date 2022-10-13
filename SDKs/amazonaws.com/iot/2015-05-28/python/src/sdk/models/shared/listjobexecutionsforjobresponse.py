from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobexecutionsummaryforjob


@dataclass_json
@dataclass
class ListJobExecutionsForJobResponse:
    execution_summaries: Optional[List[jobexecutionsummaryforjob.JobExecutionSummaryForJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
