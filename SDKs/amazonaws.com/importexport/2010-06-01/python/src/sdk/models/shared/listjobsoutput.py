from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListJobsOutput:
    r"""ListJobsOutput
    Output structure for the ListJobs operation.
    """
    
    is_truncated: Optional[bool] = field(default=None)
    jobs: Optional[List[Job]] = field(default=None)
    
