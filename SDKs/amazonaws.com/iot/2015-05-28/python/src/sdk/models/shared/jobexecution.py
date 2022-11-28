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
class JobExecution:
    r"""JobExecution
    The job execution object represents the execution of a job on a particular device.
    """
    
    approximate_seconds_before_timed_out: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approximateSecondsBeforeTimedOut') }})
    execution_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionNumber') }})
    force_canceled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forceCanceled') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    queued_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queuedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[JobExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_details: Optional[JobExecutionStatusDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusDetails') }})
    thing_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingArn') }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionNumber') }})
    
