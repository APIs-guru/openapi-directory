from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchStopJobRunError:
    r"""BatchStopJobRunError
    Records an error that occurred when attempting to stop a specified job run.
    """
    
    error_detail: Optional[ErrorDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorDetail') }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    job_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobRunId') }})
    
