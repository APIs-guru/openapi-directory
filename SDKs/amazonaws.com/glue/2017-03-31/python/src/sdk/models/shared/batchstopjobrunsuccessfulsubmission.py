from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchStopJobRunSuccessfulSubmission:
    r"""BatchStopJobRunSuccessfulSubmission
    Records a successful request to stop a specified <code>JobRun</code>.
    """
    
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    job_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobRunId') }})
    
