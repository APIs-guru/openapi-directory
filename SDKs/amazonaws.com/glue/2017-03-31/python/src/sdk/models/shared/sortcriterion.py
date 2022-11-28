from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SortCriterion:
    r"""SortCriterion
    Specifies a field to sort by and a sort order.
    """
    
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FieldName') }})
    sort: Optional[SortEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sort') }})
    
