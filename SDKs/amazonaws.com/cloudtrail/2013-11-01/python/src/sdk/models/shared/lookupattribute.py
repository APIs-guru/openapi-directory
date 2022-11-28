from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LookupAttribute:
    r"""LookupAttribute
    Specifies an attribute and value that filter the events returned.
    """
    
    attribute_key: LookupAttributeKeyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeKey') }})
    attribute_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeValue') }})
    
