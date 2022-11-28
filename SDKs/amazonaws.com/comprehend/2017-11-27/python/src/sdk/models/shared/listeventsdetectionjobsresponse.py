from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListEventsDetectionJobsResponse:
    events_detection_job_properties_list: Optional[List[EventsDetectionJobProperties]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventsDetectionJobPropertiesList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
