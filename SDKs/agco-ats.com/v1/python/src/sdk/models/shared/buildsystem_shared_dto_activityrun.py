from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import buildsystem_shared_dto_parametervalue
from . import buildsystem_shared_dto_activityrunstatus
from . import buildsystem_shared_dto_activitystep


@dataclass_json
@dataclass
class BuildSystemSharedDtoActivityRun:
    activity_run_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivityRunID' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_activity_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobActivityID' }})
    job_run_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobRunID' }})
    parameters: Optional[List[buildsystem_shared_dto_parametervalue.BuildSystemSharedDtoParameterValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: buildsystem_shared_dto_activityrunstatus.BuildSystemSharedDtoActivityRunStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    steps: Optional[List[buildsystem_shared_dto_activitystep.BuildSystemSharedDtoActivityStep]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Steps' }})
    
