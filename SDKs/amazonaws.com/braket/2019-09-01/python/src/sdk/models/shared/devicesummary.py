from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeviceSummary:
    r"""DeviceSummary
    Includes information about the device.
    """
    
    device_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceArn') }})
    device_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    device_status: DeviceStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceStatus') }})
    device_type: DeviceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceType') }})
    provider_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerName') }})
    
