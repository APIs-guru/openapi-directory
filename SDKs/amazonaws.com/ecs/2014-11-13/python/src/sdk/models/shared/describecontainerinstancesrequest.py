from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import containerinstancefield_enum


@dataclass_json
@dataclass
class DescribeContainerInstancesRequest:
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    container_instances: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerInstances' }})
    include: Optional[List[containerinstancefield_enum.ContainerInstanceFieldEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include' }})
    
