from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Cell:
    r"""Cell
    An object that represents a single cell in a table.
    """
    
    format: Optional[FormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    formatted_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedValue') }})
    formula: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formula') }})
    raw_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawValue') }})
    
