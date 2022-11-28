from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Selector:
    r"""Selector
    A comparision that is used to determine whether a query should return this object.
    """
    
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldName') }})
    operator: Optional[Operator] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    
