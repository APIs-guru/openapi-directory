from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobExecutionSummaryForJob:
    r"""JobExecutionSummaryForJob
    Contains a summary of information about job executions for a specific job.
    """
    
    job_execution_summary: Optional[JobExecutionSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobExecutionSummary') }})
    thing_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingArn') }})
    
