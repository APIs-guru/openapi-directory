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
    <p>For the <code>UpdateItem</code> operation, represents the attributes to be modified, the action to perform on each, and the new value for each.</p> <note> <p>You cannot use <code>UpdateItem</code> to update any primary key attributes. Instead, you will need to delete the item, and then use <code>PutItem</code> to create a new item with new attributes.</p> </note> <p>Attribute values cannot be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p>
    """
    
    action: Optional[AttributeActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    value: Optional[AttributeValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
