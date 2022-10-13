from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import environmentlifecyclestatus_enum


@dataclass_json
@dataclass
class EnvironmentLifecycle:
    failure_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureResource' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    status: Optional[environmentlifecyclestatus_enum.EnvironmentLifecycleStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
