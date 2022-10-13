from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devicepoolcompatibilityresult
from . import devicepoolcompatibilityresult


@dataclass_json
@dataclass
class GetDevicePoolCompatibilityResult:
    compatible_devices: Optional[List[devicepoolcompatibilityresult.DevicePoolCompatibilityResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibleDevices' }})
    incompatible_devices: Optional[List[devicepoolcompatibilityresult.DevicePoolCompatibilityResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incompatibleDevices' }})
    
