from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dockervolumeconfiguration
from . import efsvolumeconfiguration
from . import fsxwindowsfileservervolumeconfiguration
from . import hostvolumeproperties


@dataclass_json
@dataclass
class Volume:
    docker_volume_configuration: Optional[dockervolumeconfiguration.DockerVolumeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerVolumeConfiguration' }})
    efs_volume_configuration: Optional[efsvolumeconfiguration.EfsVolumeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'efsVolumeConfiguration' }})
    fsx_windows_file_server_volume_configuration: Optional[fsxwindowsfileservervolumeconfiguration.FSxWindowsFileServerVolumeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fsxWindowsFileServerVolumeConfiguration' }})
    host: Optional[hostvolumeproperties.HostVolumeProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
