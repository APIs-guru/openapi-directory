from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObjectTypes:
    r"""ObjectTypes
    Information about the type of an object in a merge operation.
    """
    
    base: Optional[ObjectTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base') }})
    destination: Optional[ObjectTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    source: Optional[ObjectTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
