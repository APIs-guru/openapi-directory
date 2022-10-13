from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import autoscalinggroup


@dataclass_json
@dataclass
class NodegroupResources:
    auto_scaling_groups: Optional[List[autoscalinggroup.AutoScalingGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoScalingGroups' }})
    remote_access_security_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteAccessSecurityGroup' }})
    
