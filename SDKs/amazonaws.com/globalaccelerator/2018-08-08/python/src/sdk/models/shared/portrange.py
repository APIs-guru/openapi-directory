from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PortRange:
    from_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromPort' }})
    to_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ToPort' }})
    
