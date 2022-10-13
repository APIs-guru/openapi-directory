from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchStopJobRunRequest:
    job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    job_run_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobRunIds' }})
    
