from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rule


@dataclass_json
@dataclass
class CreateDevicePoolRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    max_devices: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDevices' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    project_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectArn' }})
    rules: List[rule.Rule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
