from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import instancestatus_enum
from . import instancetype_enum


@dataclass_json
@dataclass
class ListDeploymentInstancesInput:
    deployment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentId' }})
    instance_status_filter: Optional[List[instancestatus_enum.InstanceStatusEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceStatusFilter' }})
    instance_type_filter: Optional[List[instancetype_enum.InstanceTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceTypeFilter' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
