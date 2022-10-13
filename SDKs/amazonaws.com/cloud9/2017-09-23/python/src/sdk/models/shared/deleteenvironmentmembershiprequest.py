from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteEnvironmentMembershipRequest:
    environment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentId' }})
    user_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userArn' }})
    
