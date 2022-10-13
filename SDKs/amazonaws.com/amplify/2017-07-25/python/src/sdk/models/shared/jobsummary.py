from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import jobtype_enum
from . import jobstatus_enum


@dataclass_json
@dataclass
class JobSummary:
    commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitId' }})
    commit_message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitMessage' }})
    commit_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobArn' }})
    job_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    job_type: jobtype_enum.JobTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobType' }})
    start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: jobstatus_enum.JobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
