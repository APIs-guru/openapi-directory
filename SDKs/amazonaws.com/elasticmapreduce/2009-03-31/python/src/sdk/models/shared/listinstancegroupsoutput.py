from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListInstanceGroupsOutput:
    r"""ListInstanceGroupsOutput
    This input determines which instance groups to retrieve.
    """
    
    instance_groups: Optional[List[InstanceGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceGroups') }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    
