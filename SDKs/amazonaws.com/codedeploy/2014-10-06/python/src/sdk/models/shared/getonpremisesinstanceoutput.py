from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instanceinfo


@dataclass_json
@dataclass
class GetOnPremisesInstanceOutput:
    instance_info: Optional[instanceinfo.InstanceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceInfo' }})
    
