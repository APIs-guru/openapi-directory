from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import profilinggroupdescription


@dataclass_json
@dataclass
class ListProfilingGroupsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    profiling_group_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profilingGroupNames' }})
    profiling_groups: Optional[List[profilinggroupdescription.ProfilingGroupDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profilingGroups' }})
    
