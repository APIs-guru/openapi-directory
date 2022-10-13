from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import containerinstance
from . import failure


@dataclass_json
@dataclass
class DescribeContainerInstancesResponse:
    container_instances: Optional[List[containerinstance.ContainerInstance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerInstances' }})
    failures: Optional[List[failure.Failure]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failures' }})
    
