from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeviceInstance:
    r"""DeviceInstance
    Represents the device instance.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    device_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceArn') }})
    instance_profile: Optional[InstanceProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceProfile') }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    status: Optional[InstanceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    udid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('udid') }})
    
