from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Trait:
    r"""Trait
     Provides contextual information about the extracted entity. 
    """
    
    name: Optional[AttributeNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Score') }})
    
