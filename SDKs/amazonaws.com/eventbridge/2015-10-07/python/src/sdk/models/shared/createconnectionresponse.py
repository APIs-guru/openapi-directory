from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import connectionstate_enum


@dataclass_json
@dataclass
class CreateConnectionResponse:
    connection_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionArn' }})
    connection_state: Optional[connectionstate_enum.ConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionState' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
