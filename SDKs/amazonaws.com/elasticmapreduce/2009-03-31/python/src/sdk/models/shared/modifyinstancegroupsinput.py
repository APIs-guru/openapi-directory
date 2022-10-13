from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instancegroupmodifyconfig


@dataclass_json
@dataclass
class ModifyInstanceGroupsInput:
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    instance_groups: Optional[List[instancegroupmodifyconfig.InstanceGroupModifyConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceGroups' }})
    
