from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import notebookexecutionstatus_enum


@dataclass_json
@dataclass
class NotebookExecutionSummary:
    editor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EditorId' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    notebook_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookExecutionId' }})
    notebook_execution_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookExecutionName' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[notebookexecutionstatus_enum.NotebookExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
