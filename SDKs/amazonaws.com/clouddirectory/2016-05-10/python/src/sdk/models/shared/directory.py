from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import directorystate_enum


@dataclass_json
@dataclass
class Directory:
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    directory_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryArn' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    state: Optional[directorystate_enum.DirectoryStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
