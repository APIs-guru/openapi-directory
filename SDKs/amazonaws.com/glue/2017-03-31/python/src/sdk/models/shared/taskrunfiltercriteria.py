from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import taskstatustype_enum
from . import tasktype_enum


@dataclass_json
@dataclass
class TaskRunFilterCriteria:
    started_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartedAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    started_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartedBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[taskstatustype_enum.TaskStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    task_run_type: Optional[tasktype_enum.TaskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskRunType' }})
    
