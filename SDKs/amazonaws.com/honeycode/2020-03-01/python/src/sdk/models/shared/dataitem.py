from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataItem:
    r"""DataItem
    The data in a particular data cell defined on the screen.
    """
    
    formatted_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedValue') }})
    override_format: Optional[FormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideFormat') }})
    raw_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawValue') }})
    
