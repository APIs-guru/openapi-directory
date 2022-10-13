from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import job


@dataclass_json
@dataclass
class BatchGetJobsResponse:
    jobs: Optional[List[job.Job]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Jobs' }})
    jobs_not_found: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobsNotFound' }})
    
