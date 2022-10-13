from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import instanceaction_enum


@dataclass_json
@dataclass
class BlueInstanceTerminationOption:
    action: Optional[instanceaction_enum.InstanceActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    termination_wait_time_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terminationWaitTimeInMinutes' }})
    
