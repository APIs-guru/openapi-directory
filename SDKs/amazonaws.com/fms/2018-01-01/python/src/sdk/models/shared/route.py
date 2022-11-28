from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Route:
    r"""Route
    Describes a route in a route table.
    """
    
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    destination_type: Optional[DestinationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationType') }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Target') }})
    target_type: Optional[TargetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetType') }})
    
