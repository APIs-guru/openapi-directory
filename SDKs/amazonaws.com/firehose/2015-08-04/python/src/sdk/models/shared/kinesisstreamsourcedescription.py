from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KinesisStreamSourceDescription:
    delivery_start_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStartTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    kinesis_stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisStreamARN' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    
