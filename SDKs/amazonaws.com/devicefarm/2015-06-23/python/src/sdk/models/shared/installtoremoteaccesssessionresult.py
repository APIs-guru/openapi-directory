from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstallToRemoteAccessSessionResult:
    r"""InstallToRemoteAccessSessionResult
    Represents the response from the server after AWS Device Farm makes a request to install to a remote access session.
    """
    
    app_upload: Optional[Upload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appUpload') }})
    
