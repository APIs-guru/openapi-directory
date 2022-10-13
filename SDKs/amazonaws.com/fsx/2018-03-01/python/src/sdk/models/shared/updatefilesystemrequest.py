from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import updatefilesystemlustreconfiguration
from . import updatefilesystemontapconfiguration
from . import updatefilesystemwindowsconfiguration


@dataclass_json
@dataclass
class UpdateFileSystemRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    file_system_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemId' }})
    lustre_configuration: Optional[updatefilesystemlustreconfiguration.UpdateFileSystemLustreConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LustreConfiguration' }})
    ontap_configuration: Optional[updatefilesystemontapconfiguration.UpdateFileSystemOntapConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OntapConfiguration' }})
    storage_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageCapacity' }})
    windows_configuration: Optional[updatefilesystemwindowsconfiguration.UpdateFileSystemWindowsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowsConfiguration' }})
    
