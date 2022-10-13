from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rule


@dataclass_json
@dataclass
class UpdateDevicePoolRequest:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    clear_max_devices: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clearMaxDevices' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    max_devices: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDevices' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rules: Optional[List[rule.Rule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
