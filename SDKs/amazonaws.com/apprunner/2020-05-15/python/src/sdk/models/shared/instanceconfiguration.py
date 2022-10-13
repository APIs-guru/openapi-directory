from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InstanceConfiguration:
    cpu: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cpu' }})
    instance_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceRoleArn' }})
    memory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Memory' }})
    
