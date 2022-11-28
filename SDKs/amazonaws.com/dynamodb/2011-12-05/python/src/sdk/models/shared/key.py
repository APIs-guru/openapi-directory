from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Key:
    r"""Key
    The primary key that uniquely identifies each item in a table. A primary key can be a one attribute (hash) primary key or a two attribute (hash-and-range) primary key.
    """
    
    hash_key_element: AttributeValue = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HashKeyElement') }})
    range_key_element: Optional[AttributeValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RangeKeyElement') }})
    
