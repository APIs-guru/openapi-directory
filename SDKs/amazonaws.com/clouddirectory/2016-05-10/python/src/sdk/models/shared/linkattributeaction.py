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
class LinkAttributeAction:
    r"""LinkAttributeAction
    The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity.
    """
    
    attribute_action_type: Optional[UpdateActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeActionType') }})
    attribute_update_value: Optional[TypedAttributeValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeUpdateValue') }})
    
