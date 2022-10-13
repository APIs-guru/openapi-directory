from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import device
from . import incompatibilitymessage


@dataclass_json
@dataclass
class DevicePoolCompatibilityResult:
    compatible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatible' }})
    device: Optional[device.Device] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    incompatibility_messages: Optional[List[incompatibilitymessage.IncompatibilityMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incompatibilityMessages' }})
    
