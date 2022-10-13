from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sentimentdetectionjobproperties


@dataclass_json
@dataclass
class ListSentimentDetectionJobsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sentiment_detection_job_properties_list: Optional[List[sentimentdetectionjobproperties.SentimentDetectionJobProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SentimentDetectionJobPropertiesList' }})
    
