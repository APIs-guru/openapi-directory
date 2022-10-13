from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import containerinstancestatus_enum


@dataclass_json
@dataclass
class UpdateContainerInstancesStateRequest:
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    container_instances: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerInstances' }})
    status: containerinstancestatus_enum.ContainerInstanceStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
