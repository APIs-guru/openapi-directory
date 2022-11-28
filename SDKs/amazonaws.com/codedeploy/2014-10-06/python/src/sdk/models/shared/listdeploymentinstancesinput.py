from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDeploymentInstancesInput:
    r"""ListDeploymentInstancesInput
     Represents the input of a <code>ListDeploymentInstances</code> operation. 
    """
    
    deployment_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentId') }})
    instance_status_filter: Optional[List[InstanceStatusEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceStatusFilter') }})
    instance_type_filter: Optional[List[InstanceTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceTypeFilter') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
