from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AwsAccessKeysAuthenticationModeEnum(str, Enum):
    CREDENTIALS = "credentials"


@dataclass_json
@dataclass
class AwsAccessKeys:
    access_key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessKeyId' }})
    authentication_mode: Optional[AwsAccessKeysAuthenticationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticationMode' }})
    secret_access_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretAccessKey' }})
    
