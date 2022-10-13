from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import scalingactivity


@dataclass_json
@dataclass
class DescribeScalingActivitiesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    scaling_activities: Optional[List[scalingactivity.ScalingActivity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingActivities' }})
    
