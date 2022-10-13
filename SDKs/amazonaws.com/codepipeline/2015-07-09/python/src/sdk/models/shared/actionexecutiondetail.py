from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import actionexecutioninput
from . import actionexecutionoutput
from . import actionexecutionstatus_enum


@dataclass_json
@dataclass
class ActionExecutionDetail:
    action_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionExecutionId' }})
    action_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionName' }})
    input: Optional[actionexecutioninput.ActionExecutionInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    output: Optional[actionexecutionoutput.ActionExecutionOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'output' }})
    pipeline_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineExecutionId' }})
    pipeline_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineVersion' }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageName' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[actionexecutionstatus_enum.ActionExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
