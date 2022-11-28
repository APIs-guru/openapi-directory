from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDevicePoolRequest:
    r"""CreateDevicePoolRequest
    Represents a request to the create device pool operation.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    project_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectArn') }})
    rules: List[Rule] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    max_devices: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDevices') }})
    
