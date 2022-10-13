from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sentimentdetectionjobproperties


@dataclass_json
@dataclass
class DescribeSentimentDetectionJobResponse:
    sentiment_detection_job_properties: Optional[sentimentdetectionjobproperties.SentimentDetectionJobProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SentimentDetectionJobProperties' }})
    
