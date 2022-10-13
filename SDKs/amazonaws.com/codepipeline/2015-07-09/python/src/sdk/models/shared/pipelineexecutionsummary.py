from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sourcerevision
from . import pipelineexecutionstatus_enum
from . import stopexecutiontrigger
from . import executiontrigger


@dataclass_json
@dataclass
class PipelineExecutionSummary:
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pipeline_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineExecutionId' }})
    source_revisions: Optional[List[sourcerevision.SourceRevision]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceRevisions' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[pipelineexecutionstatus_enum.PipelineExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    stop_trigger: Optional[stopexecutiontrigger.StopExecutionTrigger] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopTrigger' }})
    trigger: Optional[executiontrigger.ExecutionTrigger] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger' }})
    
