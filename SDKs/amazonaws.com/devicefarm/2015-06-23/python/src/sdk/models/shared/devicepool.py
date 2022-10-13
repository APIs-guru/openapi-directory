from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import rule
from . import devicepooltype_enum


@dataclass_json
@dataclass
class DevicePool:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    max_devices: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDevices' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rules: Optional[List[rule.Rule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    type: Optional[devicepooltype_enum.DevicePoolTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
