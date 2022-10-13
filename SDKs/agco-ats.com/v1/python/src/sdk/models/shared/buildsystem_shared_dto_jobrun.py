from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import buildsystem_shared_dto_activityrun
from . import buildsystem_shared_dto_parametervalue

class BuildSystemSharedDtoJobRunStatusEnum(str, Enum):
    READY = "Ready"
    IN_PROGRESS = "InProgress"
    SUCCEEDED = "Succeeded"
    CANCELLED = "Cancelled"
    FAILED = "Failed"


@dataclass_json
@dataclass
class BuildSystemSharedDtoJobRun:
    activity_runs: Optional[List[buildsystem_shared_dto_activityrun.BuildSystemSharedDtoActivityRun]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivityRuns' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobID' }})
    job_run_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobRunID' }})
    parameters: Optional[List[buildsystem_shared_dto_parametervalue.BuildSystemSharedDtoParameterValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[BuildSystemSharedDtoJobRunStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
