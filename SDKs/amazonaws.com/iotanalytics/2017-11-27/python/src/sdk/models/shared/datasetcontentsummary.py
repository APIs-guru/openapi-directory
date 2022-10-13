from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import datasetcontentstatus


@dataclass_json
@dataclass
class DatasetContentSummary:
    completion_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completionTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    schedule_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[datasetcontentstatus.DatasetContentStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
