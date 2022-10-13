from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import entitiesdetectionjobproperties


@dataclass_json
@dataclass
class ListEntitiesDetectionJobsResponse:
    entities_detection_job_properties_list: Optional[List[entitiesdetectionjobproperties.EntitiesDetectionJobProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntitiesDetectionJobPropertiesList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
