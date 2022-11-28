from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComputeEnvironmentDetail:
    r"""ComputeEnvironmentDetail
    An object representing an Batch compute environment.
    """
    
    compute_environment_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEnvironmentArn') }})
    compute_environment_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEnvironmentName') }})
    ecs_cluster_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ecsClusterArn') }})
    compute_resources: Optional[ComputeResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeResources') }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRole') }})
    state: Optional[CeStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status: Optional[CeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusReason') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[CeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
