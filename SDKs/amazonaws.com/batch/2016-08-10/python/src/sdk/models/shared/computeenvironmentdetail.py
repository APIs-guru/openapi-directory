from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import computeresource
from . import cestate_enum
from . import cestatus_enum
from . import cetype_enum


@dataclass_json
@dataclass
class ComputeEnvironmentDetail:
    compute_environment_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeEnvironmentArn' }})
    compute_environment_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeEnvironmentName' }})
    compute_resources: Optional[computeresource.ComputeResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeResources' }})
    ecs_cluster_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ecsClusterArn' }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRole' }})
    state: Optional[cestate_enum.CeStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status: Optional[cestatus_enum.CeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusReason' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[cetype_enum.CeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
