from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dominantlanguagedetectionjobproperties


@dataclass_json
@dataclass
class DescribeDominantLanguageDetectionJobResponse:
    dominant_language_detection_job_properties: Optional[dominantlanguagedetectionjobproperties.DominantLanguageDetectionJobProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DominantLanguageDetectionJobProperties' }})
    
