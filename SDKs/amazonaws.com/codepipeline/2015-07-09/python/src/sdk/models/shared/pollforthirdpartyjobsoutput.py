from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PollForThirdPartyJobsOutput:
    r"""PollForThirdPartyJobsOutput
    Represents the output of a <code>PollForThirdPartyJobs</code> action.
    """
    
    jobs: Optional[List[ThirdPartyJob]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    
