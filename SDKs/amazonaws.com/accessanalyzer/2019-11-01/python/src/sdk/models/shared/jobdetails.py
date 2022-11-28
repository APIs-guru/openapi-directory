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
class JobDetails:
    r"""JobDetails
    Contains details about the policy generation request.
    """
    
    job_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    started_on: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedOn'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: JobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    completed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_error: Optional[JobError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobError') }})
    
