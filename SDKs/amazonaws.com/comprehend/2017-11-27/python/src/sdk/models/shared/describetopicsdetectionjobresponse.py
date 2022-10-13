from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import topicsdetectionjobproperties


@dataclass_json
@dataclass
class DescribeTopicsDetectionJobResponse:
    topics_detection_job_properties: Optional[topicsdetectionjobproperties.TopicsDetectionJobProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TopicsDetectionJobProperties' }})
    
