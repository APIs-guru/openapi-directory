from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Credentials:
    access_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessKeyId' }})
    secret_access_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretAccessKey' }})
    session_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionToken' }})
    
