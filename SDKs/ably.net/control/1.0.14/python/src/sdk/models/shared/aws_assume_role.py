from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AwsAssumeRoleAuthenticationModeEnum(str, Enum):
    ASSUME_ROLE = "assumeRole"


@dataclass_json
@dataclass
class AwsAssumeRole:
    assume_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assumeRoleArn') }})
    authentication_mode: Optional[AwsAssumeRoleAuthenticationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationMode') }})
    
