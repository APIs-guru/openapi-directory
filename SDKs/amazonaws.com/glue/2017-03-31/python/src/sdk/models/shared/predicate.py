from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Predicate:
    r"""Predicate
    Defines the predicate of the trigger, which determines when it fires.
    """
    
    conditions: Optional[List[Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Conditions') }})
    logical: Optional[LogicalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Logical') }})
    
