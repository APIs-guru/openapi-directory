from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NodegroupResources:
    r"""NodegroupResources
    An object representing the resources associated with the node group, such as Auto Scaling groups and security groups for remote access.
    """
    
    auto_scaling_groups: Optional[List[AutoScalingGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroups') }})
    remote_access_security_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteAccessSecurityGroup') }})
    
