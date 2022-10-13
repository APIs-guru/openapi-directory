from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MountPoint:
    container_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerPath' }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readOnly' }})
    source_volume: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceVolume' }})
    
