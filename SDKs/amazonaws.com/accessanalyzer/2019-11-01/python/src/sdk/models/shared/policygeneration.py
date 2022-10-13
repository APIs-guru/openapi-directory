from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import jobstatus_enum


@dataclass_json
@dataclass
class PolicyGeneration:
    completed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    principal_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalArn' }})
    started_on: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: jobstatus_enum.JobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
