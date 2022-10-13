from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lambdadevicemount
from . import lambdavolumemount


@dataclass_json
@dataclass
class LambdaContainerParams:
    devices: Optional[List[lambdadevicemount.LambdaDeviceMount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    memory_size_in_kb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memorySizeInKB' }})
    mount_ro_sysfs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mountROSysfs' }})
    volumes: Optional[List[lambdavolumemount.LambdaVolumeMount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    
