from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import instancegroupconfig


@dataclass_json
@dataclass
class AddInstanceGroupsInput:
    instance_groups: List[instancegroupconfig.InstanceGroupConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceGroups' }})
    job_flow_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobFlowId' }})
    
