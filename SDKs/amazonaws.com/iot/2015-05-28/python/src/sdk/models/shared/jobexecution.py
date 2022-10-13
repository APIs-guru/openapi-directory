from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import jobexecutionstatus_enum
from . import jobexecutionstatusdetails


@dataclass_json
@dataclass
class JobExecution:
    approximate_seconds_before_timed_out: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approximateSecondsBeforeTimedOut' }})
    execution_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionNumber' }})
    force_canceled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forceCanceled' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    queued_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queuedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[jobexecutionstatus_enum.JobExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_details: Optional[jobexecutionstatusdetails.JobExecutionStatusDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusDetails' }})
    thing_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingArn' }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionNumber' }})
    
