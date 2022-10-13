from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobdetail


@dataclass_json
@dataclass
class DescribeJobsResponse:
    jobs: Optional[List[jobdetail.JobDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    
