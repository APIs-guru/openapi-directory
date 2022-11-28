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
class ObjectAttributeUpdate:
    r"""ObjectAttributeUpdate
    Structure that contains attribute update information.
    """
    
    object_attribute_action: Optional[ObjectAttributeAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectAttributeAction') }})
    object_attribute_key: Optional[AttributeKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectAttributeKey') }})
    
