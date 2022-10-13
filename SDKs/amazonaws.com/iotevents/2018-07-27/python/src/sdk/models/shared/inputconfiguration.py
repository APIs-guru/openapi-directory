from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import inputstatus_enum


@dataclass_json
@dataclass
class InputConfiguration:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputArn' }})
    input_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputDescription' }})
    input_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputName' }})
    last_update_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: inputstatus_enum.InputStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
