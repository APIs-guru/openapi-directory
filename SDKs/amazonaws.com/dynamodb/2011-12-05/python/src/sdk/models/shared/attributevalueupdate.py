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
class AttributeValueUpdate:
    r"""AttributeValueUpdate
    Specifies the attribute to update and how to perform the update. Possible values: <code>PUT</code> (default), <code>ADD</code> or <code>DELETE</code>.
    """
    
    action: Optional[AttributeActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    value: Optional[AttributeValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
