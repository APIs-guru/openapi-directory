from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instanceaccess


@dataclass_json
@dataclass
class GetInstanceAccessOutput:
    instance_access: Optional[instanceaccess.InstanceAccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceAccess' }})
    
