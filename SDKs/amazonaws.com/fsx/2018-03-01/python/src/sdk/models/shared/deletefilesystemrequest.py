from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteFileSystemRequest:
    r"""DeleteFileSystemRequest
    The request object for <code>DeleteFileSystem</code> operation.
    """
    
    file_system_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemId') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    lustre_configuration: Optional[DeleteFileSystemLustreConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LustreConfiguration') }})
    windows_configuration: Optional[DeleteFileSystemWindowsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WindowsConfiguration') }})
    
