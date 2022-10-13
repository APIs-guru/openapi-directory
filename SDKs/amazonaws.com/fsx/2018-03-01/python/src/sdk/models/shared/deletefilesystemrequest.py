from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deletefilesystemlustreconfiguration
from . import deletefilesystemwindowsconfiguration


@dataclass_json
@dataclass
class DeleteFileSystemRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    file_system_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemId' }})
    lustre_configuration: Optional[deletefilesystemlustreconfiguration.DeleteFileSystemLustreConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LustreConfiguration' }})
    windows_configuration: Optional[deletefilesystemwindowsconfiguration.DeleteFileSystemWindowsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowsConfiguration' }})
    
