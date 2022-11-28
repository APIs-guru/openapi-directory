from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExpectedAttributeValue:
    r"""ExpectedAttributeValue
    Allows you to provide an attribute name, and whether or not Amazon DynamoDB should check to see if the attribute value already exists; or if the attribute value exists and has a particular value before changing it.
    """
    
    exists: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Exists') }})
    value: Optional[AttributeValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
