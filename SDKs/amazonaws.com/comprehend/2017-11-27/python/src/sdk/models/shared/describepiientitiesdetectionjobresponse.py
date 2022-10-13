from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import piientitiesdetectionjobproperties


@dataclass_json
@dataclass
class DescribePiiEntitiesDetectionJobResponse:
    pii_entities_detection_job_properties: Optional[piientitiesdetectionjobproperties.PiiEntitiesDetectionJobProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PiiEntitiesDetectionJobProperties' }})
    
