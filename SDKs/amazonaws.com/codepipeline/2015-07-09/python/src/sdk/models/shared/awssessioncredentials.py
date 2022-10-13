from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsSessionCredentials:
    access_key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessKeyId' }})
    secret_access_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretAccessKey' }})
    session_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionToken' }})
    
