from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BuildSystemSharedDtoJobRunStatusEnum(str, Enum):
    READY = "Ready"
    IN_PROGRESS = "InProgress"
    SUCCEEDED = "Succeeded"
    CANCELLED = "Cancelled"
    FAILED = "Failed"


@dataclass_json
@dataclass
class BuildSystemSharedDtoJobRunInput:
    r"""BuildSystemSharedDtoJobRunInput
    A DTO for an IJobRun
    """
    
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'EndDate' }})
    job_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobID') }, 'form': { 'field_name': 'JobID' }})
    job_run_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobRunID') }, 'form': { 'field_name': 'JobRunID' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'StartDate' }})
    status: Optional[BuildSystemSharedDtoJobRunStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }, 'form': { 'field_name': 'Status' }})
    

@dataclass_json
@dataclass
class BuildSystemSharedDtoJobRun:
    r"""BuildSystemSharedDtoJobRun
    A DTO for an IJobRun
    """
    
    activity_runs: Optional[List[BuildSystemSharedDtoActivityRun]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivityRuns') }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobID') }})
    job_run_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobRunID') }})
    parameters: Optional[List[BuildSystemSharedDtoParameterValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[BuildSystemSharedDtoJobRunStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
