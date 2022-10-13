from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeTrailsRequest:
    include_shadow_trails: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeShadowTrails' }})
    trail_name_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trailNameList' }})
    
