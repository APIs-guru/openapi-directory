from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import comprehendmedicalasyncjobproperties


@dataclass_json
@dataclass
class DescribeEntitiesDetectionV2JobResponse:
    comprehend_medical_async_job_properties: Optional[comprehendmedicalasyncjobproperties.ComprehendMedicalAsyncJobProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComprehendMedicalAsyncJobProperties' }})
    
