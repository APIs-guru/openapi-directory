from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudcomponentstatus


@dataclass_json
@dataclass
class CreateComponentVersionResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    component_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentName' }})
    component_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentVersion' }})
    creation_timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: cloudcomponentstatus.CloudComponentStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
