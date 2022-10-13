from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegisterOnPremisesInstanceInput:
    iam_session_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamSessionArn' }})
    iam_user_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamUserArn' }})
    instance_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceName' }})
    
