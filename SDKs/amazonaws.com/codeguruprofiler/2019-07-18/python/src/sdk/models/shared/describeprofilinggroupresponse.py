from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import profilinggroupdescription


@dataclass_json
@dataclass
class DescribeProfilingGroupResponse:
    profiling_group: profilinggroupdescription.ProfilingGroupDescription = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profilingGroup' }})
    
