from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BuildSystemSharedDtoActivityRun:
    r"""BuildSystemSharedDtoActivityRun
    A DTO for an IActivityRun
    """
    
    status: BuildSystemSharedDtoActivityRunStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    activity_run_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivityRunID') }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_activity_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobActivityID') }})
    job_run_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobRunID') }})
    parameters: Optional[List[BuildSystemSharedDtoParameterValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    steps: Optional[List[BuildSystemSharedDtoActivityStep]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Steps') }})
    

@dataclass_json
@dataclass
class BuildSystemSharedDtoActivityRunInput:
    r"""BuildSystemSharedDtoActivityRunInput
    A DTO for an IActivityRun
    """
    
    status: BuildSystemSharedDtoActivityRunStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }, 'form': { 'field_name': 'Status' }})
    activity_run_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivityRunID') }, 'form': { 'field_name': 'ActivityRunID' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'EndDate' }})
    job_activity_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobActivityID') }, 'form': { 'field_name': 'JobActivityID' }})
    job_run_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobRunID') }, 'form': { 'field_name': 'JobRunID' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'StartDate' }})
    
