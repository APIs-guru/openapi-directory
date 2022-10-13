from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyphrasesdetectionjobproperties


@dataclass_json
@dataclass
class ListKeyPhrasesDetectionJobsResponse:
    key_phrases_detection_job_properties_list: Optional[List[keyphrasesdetectionjobproperties.KeyPhrasesDetectionJobProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyPhrasesDetectionJobPropertiesList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
