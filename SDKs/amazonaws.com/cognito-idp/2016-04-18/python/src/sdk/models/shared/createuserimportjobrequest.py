from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateUserImportJobRequest:
    r"""CreateUserImportJobRequest
    Represents the request to create the user import job.
    """
    
    cloud_watch_logs_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLogsRoleArn') }})
    job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    
