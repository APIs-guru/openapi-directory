from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import filesystemlifecycle_enum
from . import deletefilesystemlustreresponse
from . import deletefilesystemwindowsresponse


@dataclass_json
@dataclass
class DeleteFileSystemResponse:
    file_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemId' }})
    lifecycle: Optional[filesystemlifecycle_enum.FileSystemLifecycleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lifecycle' }})
    lustre_response: Optional[deletefilesystemlustreresponse.DeleteFileSystemLustreResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LustreResponse' }})
    windows_response: Optional[deletefilesystemwindowsresponse.DeleteFileSystemWindowsResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowsResponse' }})
    
