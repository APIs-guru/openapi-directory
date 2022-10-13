from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConnectorConfigResponse:
    activation_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activationCode' }})
    activation_expiry: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activationExpiry', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    activation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activationId' }})
    provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
