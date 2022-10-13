from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import remoteaccesssession


@dataclass_json
@dataclass
class ListRemoteAccessSessionsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    remote_access_sessions: Optional[List[remoteaccesssession.RemoteAccessSession]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteAccessSessions' }})
    
