from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import remoteaccesssession


@dataclass_json
@dataclass
class GetRemoteAccessSessionResult:
    remote_access_session: Optional[remoteaccesssession.RemoteAccessSession] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteAccessSession' }})
    
