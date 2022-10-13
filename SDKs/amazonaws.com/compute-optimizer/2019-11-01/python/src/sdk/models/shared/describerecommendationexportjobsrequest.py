from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobfilter


@dataclass_json
@dataclass
class DescribeRecommendationExportJobsRequest:
    filters: Optional[List[jobfilter.JobFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    job_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobIds' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
