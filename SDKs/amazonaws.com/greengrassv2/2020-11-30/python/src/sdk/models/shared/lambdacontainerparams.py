from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LambdaContainerParams:
    r"""LambdaContainerParams
    Contains information about a container in which Lambda functions run on Greengrass core devices.
    """
    
    devices: Optional[List[LambdaDeviceMount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    memory_size_in_kb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memorySizeInKB') }})
    mount_ro_sysfs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountROSysfs') }})
    volumes: Optional[List[LambdaVolumeMount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    
