from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetRemoteAccessSessionResult:
    r"""GetRemoteAccessSessionResult
    Represents the response from the server that lists detailed information about the remote access session.
    """
    
    remote_access_session: Optional[RemoteAccessSession] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteAccessSession') }})
    
