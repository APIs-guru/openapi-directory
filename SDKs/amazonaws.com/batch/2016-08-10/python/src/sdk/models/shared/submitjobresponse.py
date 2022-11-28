from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SubmitJobResponse:
    job_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobName') }})
    job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobArn') }})
    
