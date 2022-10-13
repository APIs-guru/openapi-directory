from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import trail


@dataclass_json
@dataclass
class DescribeTrailsResponse:
    trail_list: Optional[List[trail.Trail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trailList' }})
    
