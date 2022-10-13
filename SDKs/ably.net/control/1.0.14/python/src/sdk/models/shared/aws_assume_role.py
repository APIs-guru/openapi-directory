from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AwsAssumeRoleAuthenticationModeEnum(str, Enum):
    ASSUME_ROLE = "assumeRole"


@dataclass_json
@dataclass
class AwsAssumeRole:
    assume_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assumeRoleArn' }})
    authentication_mode: Optional[AwsAssumeRoleAuthenticationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticationMode' }})
    
