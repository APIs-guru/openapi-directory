from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TestCase:
    duration_in_nano_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationInNanoSeconds' }})
    expired: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expired', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    report_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportArn' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    test_raw_data_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testRawDataPath' }})
    
