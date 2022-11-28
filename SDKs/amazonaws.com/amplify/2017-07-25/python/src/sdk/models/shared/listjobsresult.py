from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListJobsResult:
    r"""ListJobsResult
     The maximum number of records to list in a single response. 
    """
    
    job_summaries: List[JobSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobSummaries') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
