from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import keyphrasesdetectionjobproperties


@dataclass_json
@dataclass
class DescribeKeyPhrasesDetectionJobResponse:
    key_phrases_detection_job_properties: Optional[keyphrasesdetectionjobproperties.KeyPhrasesDetectionJobProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyPhrasesDetectionJobProperties' }})
    
