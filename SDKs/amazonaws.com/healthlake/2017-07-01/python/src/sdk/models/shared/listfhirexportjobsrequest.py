from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import jobstatus_enum


@dataclass_json
@dataclass
class ListFhirExportJobsRequest:
    datastore_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastoreId' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    job_status: Optional[jobstatus_enum.JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobStatus' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    submitted_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubmittedAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    submitted_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubmittedBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
