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
class InputConfiguration:
    r"""InputConfiguration
    Information about the configuration of an input.
    """
    
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputArn') }})
    input_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputName') }})
    last_update_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: InputStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    input_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputDescription') }})
    
