from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import entitiesdetectionjobproperties


@dataclass_json
@dataclass
class DescribeEntitiesDetectionJobResponse:
    entities_detection_job_properties: Optional[entitiesdetectionjobproperties.EntitiesDetectionJobProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntitiesDetectionJobProperties' }})
    
