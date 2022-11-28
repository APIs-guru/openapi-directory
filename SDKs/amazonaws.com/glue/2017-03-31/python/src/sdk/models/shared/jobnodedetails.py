from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobNodeDetails:
    r"""JobNodeDetails
    The details of a Job node present in the workflow.
    """
    
    job_runs: Optional[List[JobRun]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobRuns') }})
    
