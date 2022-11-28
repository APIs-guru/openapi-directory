from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AwsAccessKeysResponseAuthenticationModeEnum(str, Enum):
    CREDENTIALS = "credentials"


@dataclass_json
@dataclass
class AwsAccessKeysResponse:
    access_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKeyId') }})
    authentication_mode: Optional[AwsAccessKeysResponseAuthenticationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationMode') }})
    
