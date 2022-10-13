from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import eventsdetectionjobproperties


@dataclass_json
@dataclass
class DescribeEventsDetectionJobResponse:
    events_detection_job_properties: Optional[eventsdetectionjobproperties.EventsDetectionJobProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventsDetectionJobProperties' }})
    
