from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateUserImportJobRequest:
    cloud_watch_logs_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLogsRoleArn' }})
    job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
