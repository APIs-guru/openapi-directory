from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FilterRule:
    r"""FilterRule
    Specifies which files, folders, and objects to include or exclude when transferring files from source to destination.
    """
    
    filter_type: Optional[FilterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterType') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
