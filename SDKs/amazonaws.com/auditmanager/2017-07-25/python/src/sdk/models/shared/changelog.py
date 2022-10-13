from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import actionenum_enum
from . import objecttypeenum_enum


@dataclass_json
@dataclass
class ChangeLog:
    action: Optional[actionenum_enum.ActionEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    object_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectName' }})
    object_type: Optional[objecttypeenum_enum.ObjectTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectType' }})
    
