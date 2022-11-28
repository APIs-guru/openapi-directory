from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateRemoteAccessSessionResult:
    r"""CreateRemoteAccessSessionResult
    Represents the server response from a request to create a remote access session.
    """
    
    remote_access_session: Optional[RemoteAccessSession] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteAccessSession') }})
    
