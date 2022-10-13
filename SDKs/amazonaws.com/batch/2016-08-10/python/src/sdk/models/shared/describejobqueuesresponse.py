from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobqueuedetail


@dataclass_json
@dataclass
class DescribeJobQueuesResponse:
    job_queues: Optional[List[jobqueuedetail.JobQueueDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobQueues' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
