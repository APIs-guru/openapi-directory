from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRemoteAccessSessionsResult:
    r"""ListRemoteAccessSessionsResult
    Represents the response from the server after AWS Device Farm makes a request to return information about the remote access session.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    remote_access_sessions: Optional[List[RemoteAccessSession]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteAccessSessions') }})
    
