from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeUserImportJobRequest:
    r"""DescribeUserImportJobRequest
    Represents the request to describe the user import job.
    """
    
    job_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    
