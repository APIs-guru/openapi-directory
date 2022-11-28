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
class TransactWriteItem:
    r"""TransactWriteItem
    A list of requests that can perform update, put, delete, or check operations on multiple items in one or more tables atomically.
    """
    
    condition_check: Optional[ConditionCheck] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConditionCheck') }})
    delete: Optional[Delete] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Delete') }})
    put: Optional[Put] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Put') }})
    update: Optional[Update] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Update') }})
    
