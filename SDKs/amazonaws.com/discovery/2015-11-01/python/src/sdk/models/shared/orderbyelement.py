from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderByElement:
    r"""OrderByElement
    A field and direction for ordered output.
    """
    
    field_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldName') }})
    sort_order: Optional[OrderStringEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    
