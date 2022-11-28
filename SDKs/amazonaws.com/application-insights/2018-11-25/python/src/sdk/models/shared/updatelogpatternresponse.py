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
class UpdateLogPatternResponse:
    log_pattern: Optional[LogPattern] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogPattern') }})
    resource_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceGroupName') }})
    
