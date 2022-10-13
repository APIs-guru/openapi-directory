from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import piientitiesdetectionjobproperties


@dataclass_json
@dataclass
class ListPiiEntitiesDetectionJobsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    pii_entities_detection_job_properties_list: Optional[List[piientitiesdetectionjobproperties.PiiEntitiesDetectionJobProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PiiEntitiesDetectionJobPropertiesList' }})
    
