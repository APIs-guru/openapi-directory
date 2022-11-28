from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObjectAttributeRange:
    r"""ObjectAttributeRange
    A range of attributes.
    """
    
    attribute_key: Optional[AttributeKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeKey') }})
    range: Optional[TypedAttributeValueRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Range') }})
    
