from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTopicsDetectionJobsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    topics_detection_job_properties_list: Optional[List[TopicsDetectionJobProperties]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicsDetectionJobPropertiesList') }})
    
