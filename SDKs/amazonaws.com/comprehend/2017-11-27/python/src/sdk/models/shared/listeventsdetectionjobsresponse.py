from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventsdetectionjobproperties


@dataclass_json
@dataclass
class ListEventsDetectionJobsResponse:
    events_detection_job_properties_list: Optional[List[eventsdetectionjobproperties.EventsDetectionJobProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventsDetectionJobPropertiesList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
