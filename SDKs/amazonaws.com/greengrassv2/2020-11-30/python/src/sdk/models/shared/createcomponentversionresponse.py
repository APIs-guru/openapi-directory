from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateComponentVersionResponse:
    component_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentName') }})
    component_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentVersion') }})
    creation_timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTimestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: CloudComponentStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    
