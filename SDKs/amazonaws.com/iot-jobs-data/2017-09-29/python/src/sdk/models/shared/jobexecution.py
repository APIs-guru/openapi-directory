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
    Contains data about a job execution.
    """
    
    approximate_seconds_before_timed_out: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approximateSecondsBeforeTimedOut') }})
    execution_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionNumber') }})
    job_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDocument') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    last_updated_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt') }})
    queued_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queuedAt') }})
    started_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedAt') }})
    status: Optional[JobExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusDetails') }})
    thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingName') }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionNumber') }})
    
