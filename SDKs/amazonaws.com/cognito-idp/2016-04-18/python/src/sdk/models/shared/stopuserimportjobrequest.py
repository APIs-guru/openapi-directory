from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StopUserImportJobRequest:
    r"""StopUserImportJobRequest
    Represents the request to stop the user import job.
    """
    
    job_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    
