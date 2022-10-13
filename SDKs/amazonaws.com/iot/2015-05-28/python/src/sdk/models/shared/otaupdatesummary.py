from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OtaUpdateSummary:
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ota_update_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otaUpdateArn' }})
    ota_update_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otaUpdateId' }})
    
