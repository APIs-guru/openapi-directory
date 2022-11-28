from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutRemediationExceptionsRequest:
    config_rule_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleName') }})
    resource_keys: List[RemediationExceptionResourceKey] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceKeys') }})
    expiration_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
