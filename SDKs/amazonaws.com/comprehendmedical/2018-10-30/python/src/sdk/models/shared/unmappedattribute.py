from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UnmappedAttribute:
    r"""UnmappedAttribute
     An attribute that we extracted, but were unable to relate to an entity. 
    """
    
    attribute: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attribute') }})
    type: Optional[EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
