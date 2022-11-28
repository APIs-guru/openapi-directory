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
class UpdateEnrollmentStatusRequest:
    status: StatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    include_member_accounts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeMemberAccounts') }})
    
