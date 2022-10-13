from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import notebookexecutionstatus_enum


@dataclass_json
@dataclass
class ListNotebookExecutionsInput:
    editor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EditorId' }})
    from_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'From', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    status: Optional[notebookexecutionstatus_enum.NotebookExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    to: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'To', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
