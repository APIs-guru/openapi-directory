from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import fsxwindowsfileserverauthorizationconfig


@dataclass_json
@dataclass
class FSxWindowsFileServerVolumeConfiguration:
    authorization_config: fsxwindowsfileserverauthorizationconfig.FSxWindowsFileServerAuthorizationConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationConfig' }})
    file_system_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileSystemId' }})
    root_directory: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootDirectory' }})
    
