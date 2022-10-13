from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import workgroupconfiguration
from . import workgroupstate_enum


@dataclass_json
@dataclass
class WorkGroup:
    configuration: Optional[workgroupconfiguration.WorkGroupConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configuration' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    state: Optional[workgroupstate_enum.WorkGroupStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
