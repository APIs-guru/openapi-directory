from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import jobrun


@dataclass_json
@dataclass
class DescribeJobRunResponse:
    job_run: Optional[jobrun.JobRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobRun' }})
    
