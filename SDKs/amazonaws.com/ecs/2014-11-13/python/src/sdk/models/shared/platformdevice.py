from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlatformDevice:
    r"""PlatformDevice
    The devices that are available on the container instance. The only supported device type is a GPU.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: PlatformDeviceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
