from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssetPropertyValue:
    r"""AssetPropertyValue
    An asset property value entry containing the following information.
    """
    
    timestamp: AssetPropertyTimestamp = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    value: AssetPropertyVariant = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    quality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    
