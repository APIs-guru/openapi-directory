from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ThirdPartyJob:
    r"""ThirdPartyJob
    A response to a <code>PollForThirdPartyJobs</code> request returned by AWS CodePipeline when there is a job to be worked on by a partner action.
    """
    
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    
