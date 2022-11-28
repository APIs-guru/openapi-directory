from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListFhirImportJobsRequest:
    datastore_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreId') }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    job_status: Optional[JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobStatus') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    submitted_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubmittedAfter'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    submitted_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubmittedBefore'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
