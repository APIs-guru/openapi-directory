from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourceidentifier


@dataclass_json
@dataclass
class AuditSuppression:
    check_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_identifier: resourceidentifier.ResourceIdentifier = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceIdentifier' }})
    suppress_indefinitely: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suppressIndefinitely' }})
    
