from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VerifySoftwareTokenRequest:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToken' }})
    friendly_device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FriendlyDeviceName' }})
    session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Session' }})
    user_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserCode' }})
    
