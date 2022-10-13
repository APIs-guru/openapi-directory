from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import devicecgrouppermission_enum


@dataclass_json
@dataclass
class Device:
    container_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerPath' }})
    host_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostPath' }})
    permissions: Optional[List[devicecgrouppermission_enum.DeviceCgroupPermissionEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    
