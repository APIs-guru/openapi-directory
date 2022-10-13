from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Credentials:
    access_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessKeyId' }})
    expiration: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expiration', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    secret_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretKey' }})
    session_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionToken' }})
    
