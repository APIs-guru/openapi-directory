from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModifyInstanceGroupsInput:
    r"""ModifyInstanceGroupsInput
    Change the size of some instance groups.
    """
    
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    instance_groups: Optional[List[InstanceGroupModifyConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceGroups') }})
    
