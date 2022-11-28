from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Projection:
    r"""Projection
    Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
    """
    
    non_key_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonKeyAttributes') }})
    projection_type: Optional[ProjectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectionType') }})
    
