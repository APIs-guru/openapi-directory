from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import testgridsessionstatus_enum


@dataclass_json
@dataclass
class TestGridSession:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    billing_minutes: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingMinutes' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ended: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ended', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    selenium_properties: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seleniumProperties' }})
    status: Optional[testgridsessionstatus_enum.TestGridSessionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
