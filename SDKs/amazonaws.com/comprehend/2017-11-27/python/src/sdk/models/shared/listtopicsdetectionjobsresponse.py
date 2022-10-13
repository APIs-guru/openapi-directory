from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import topicsdetectionjobproperties


@dataclass_json
@dataclass
class ListTopicsDetectionJobsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    topics_detection_job_properties_list: Optional[List[topicsdetectionjobproperties.TopicsDetectionJobProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TopicsDetectionJobPropertiesList' }})
    
