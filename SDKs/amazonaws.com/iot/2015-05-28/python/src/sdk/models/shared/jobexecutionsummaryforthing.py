from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import jobexecutionsummary


@dataclass_json
@dataclass
class JobExecutionSummaryForThing:
    job_execution_summary: Optional[jobexecutionsummary.JobExecutionSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobExecutionSummary' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    
