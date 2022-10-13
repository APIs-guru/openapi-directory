from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import errordetail
from . import updateparam
from . import updatestatus_enum
from . import updatetype_enum


@dataclass_json
@dataclass
class Update:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    errors: Optional[List[errordetail.ErrorDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    params: Optional[List[updateparam.UpdateParam]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    status: Optional[updatestatus_enum.UpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[updatetype_enum.UpdateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
