from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AwsAccessKeysResponseAuthenticationModeEnum(str, Enum):
    CREDENTIALS = "credentials"


@dataclass_json
@dataclass
class AwsAccessKeysResponse:
    access_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessKeyId' }})
    authentication_mode: Optional[AwsAccessKeysResponseAuthenticationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticationMode' }})
    
