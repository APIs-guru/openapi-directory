from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Ec2InstanceCounts:
    active: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ACTIVE' }})
    desired: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DESIRED' }})
    idle: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IDLE' }})
    maximum: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MAXIMUM' }})
    minimum: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MINIMUM' }})
    pending: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PENDING' }})
    terminating: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TERMINATING' }})
    
