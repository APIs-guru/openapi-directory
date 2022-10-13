from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ec2tagset
from . import ec2tagfilter


@dataclass_json
@dataclass
class TargetInstances:
    auto_scaling_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoScalingGroups' }})
    ec2_tag_set: Optional[ec2tagset.Ec2TagSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2TagSet' }})
    tag_filters: Optional[List[ec2tagfilter.Ec2TagFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagFilters' }})
    
