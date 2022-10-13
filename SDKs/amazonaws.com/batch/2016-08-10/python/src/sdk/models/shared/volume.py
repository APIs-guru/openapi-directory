from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import efsvolumeconfiguration
from . import host


@dataclass_json
@dataclass
class Volume:
    efs_volume_configuration: Optional[efsvolumeconfiguration.EfsVolumeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'efsVolumeConfiguration' }})
    host: Optional[host.Host] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
