from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import comprehendmedicalasyncjobproperties


@dataclass_json
@dataclass
class ListEntitiesDetectionV2JobsResponse:
    comprehend_medical_async_job_properties_list: Optional[List[comprehendmedicalasyncjobproperties.ComprehendMedicalAsyncJobProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComprehendMedicalAsyncJobPropertiesList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
