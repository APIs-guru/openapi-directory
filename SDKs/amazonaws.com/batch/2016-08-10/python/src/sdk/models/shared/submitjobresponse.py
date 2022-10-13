from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubmitJobResponse:
    job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobArn' }})
    job_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobName' }})
    
