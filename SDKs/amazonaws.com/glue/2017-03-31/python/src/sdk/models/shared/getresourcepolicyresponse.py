from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetResourcePolicyResponse:
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    policy_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyHash' }})
    policy_in_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyInJson' }})
    update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
