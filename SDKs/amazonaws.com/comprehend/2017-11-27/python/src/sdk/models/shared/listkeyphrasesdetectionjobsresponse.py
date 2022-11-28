from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListKeyPhrasesDetectionJobsResponse:
    key_phrases_detection_job_properties_list: Optional[List[KeyPhrasesDetectionJobProperties]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyPhrasesDetectionJobPropertiesList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
