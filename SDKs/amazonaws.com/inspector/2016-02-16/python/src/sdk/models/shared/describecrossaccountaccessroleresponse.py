from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeCrossAccountAccessRoleResponse:
    registered_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registeredAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    valid: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid' }})
    
