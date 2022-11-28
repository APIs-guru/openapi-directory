from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Suite:
    r"""Suite
    Represents a collection of one or more tests.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    counters: Optional[Counters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counters') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    device_minutes: Optional[DeviceMinutes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMinutes') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    result: Optional[ExecutionResultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    started: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('started'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[ExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    stopped: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopped'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: Optional[TestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
