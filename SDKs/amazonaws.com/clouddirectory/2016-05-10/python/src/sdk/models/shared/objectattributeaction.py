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
class ObjectAttributeAction:
    r"""ObjectAttributeAction
    The action to take on the object attribute.
    """
    
    object_attribute_action_type: Optional[UpdateActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectAttributeActionType') }})
    object_attribute_update_value: Optional[TypedAttributeValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectAttributeUpdateValue') }})
    
