from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TargetInstances:
    r"""TargetInstances
    Information about the instances to be used in the replacement environment in a blue/green deployment.
    """
    
    auto_scaling_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroups') }})
    ec2_tag_set: Optional[Ec2TagSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2TagSet') }})
    tag_filters: Optional[List[Ec2TagFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagFilters') }})
    
