from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteFileSystemResponse:
    r"""DeleteFileSystemResponse
    The response object for the <code>DeleteFileSystem</code> operation.
    """
    
    file_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemId') }})
    lifecycle: Optional[FileSystemLifecycleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Lifecycle') }})
    lustre_response: Optional[DeleteFileSystemLustreResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LustreResponse') }})
    windows_response: Optional[DeleteFileSystemWindowsResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WindowsResponse') }})
    
