from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import taskrunproperties
from . import taskstatustype_enum


@dataclass_json
@dataclass
class GetMlTaskRunResponse:
    completed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorString' }})
    execution_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionTime' }})
    last_modified_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogGroupName' }})
    properties: Optional[taskrunproperties.TaskRunProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Properties' }})
    started_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[taskstatustype_enum.TaskStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    task_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskRunId' }})
    transform_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformId' }})
    
