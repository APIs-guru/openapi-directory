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
class JobSummary:
    r"""JobSummary
     Describes the summary for an execution job for an Amplify app. 
    """
    
    commit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitId') }})
    commit_message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitMessage') }})
    commit_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobArn') }})
    job_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    job_type: JobTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobType') }})
    start_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: JobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
