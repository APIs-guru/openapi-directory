from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssetPropertyValue:
    r"""AssetPropertyValue
    Contains asset property value information.
    """
    
    timestamp: TimeInNanos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    value: Variant = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    quality: Optional[QualityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    
