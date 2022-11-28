from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeTrailsRequest:
    r"""DescribeTrailsRequest
    Returns information about the trail.
    """
    
    include_shadow_trails: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeShadowTrails') }})
    trail_name_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trailNameList') }})
    
