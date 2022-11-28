from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KeySchema:
    r"""KeySchema
    The KeySchema identifies the primary key as a one attribute primary key (hash) or a composite two attribute (hash-and-range) primary key. Single attribute primary keys have one index value: a <code>HashKeyElement</code>. A composite hash-and-range primary key contains two attribute values: a <code>HashKeyElement</code> and a <code>RangeKeyElement</code>.
    """
    
    hash_key_element: KeySchemaElement = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HashKeyElement') }})
    range_key_element: Optional[KeySchemaElement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RangeKeyElement') }})
    
