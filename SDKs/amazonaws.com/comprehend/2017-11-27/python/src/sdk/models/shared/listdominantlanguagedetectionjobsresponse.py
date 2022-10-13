from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dominantlanguagedetectionjobproperties


@dataclass_json
@dataclass
class ListDominantLanguageDetectionJobsResponse:
    dominant_language_detection_job_properties_list: Optional[List[dominantlanguagedetectionjobproperties.DominantLanguageDetectionJobProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DominantLanguageDetectionJobPropertiesList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
