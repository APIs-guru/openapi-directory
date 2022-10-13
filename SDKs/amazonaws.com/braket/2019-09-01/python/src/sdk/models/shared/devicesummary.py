from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import devicestatus_enum
from . import devicetype_enum


@dataclass_json
@dataclass
class DeviceSummary:
    device_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceArn' }})
    device_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceName' }})
    device_status: devicestatus_enum.DeviceStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceStatus' }})
    device_type: devicetype_enum.DeviceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceType' }})
    provider_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerName' }})
    
