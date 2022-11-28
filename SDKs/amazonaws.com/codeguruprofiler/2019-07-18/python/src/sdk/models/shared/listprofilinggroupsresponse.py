from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListProfilingGroupsResponse:
    r"""ListProfilingGroupsResponse
    The structure representing the listProfilingGroupsResponse.
    """
    
    profiling_group_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profilingGroupNames') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    profiling_groups: Optional[List[ProfilingGroupDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profilingGroups') }})
    
