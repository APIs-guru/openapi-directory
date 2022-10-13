from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import jobstatus_enum


@dataclass_json
@dataclass
class StartFhirImportJobResponse:
    datastore_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastoreId' }})
    job_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    job_status: jobstatus_enum.JobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobStatus' }})
    
