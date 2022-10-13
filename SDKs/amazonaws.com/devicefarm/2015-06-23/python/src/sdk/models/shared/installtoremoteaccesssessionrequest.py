from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InstallToRemoteAccessSessionRequest:
    app_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appArn' }})
    remote_access_session_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteAccessSessionArn' }})
    
