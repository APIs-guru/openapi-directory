from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Device:
    r"""Device
    Represents a device type that an app is tested against.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    availability: Optional[DeviceAvailabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availability') }})
    carrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    cpu: Optional[CPU] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    fleet_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetName') }})
    fleet_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetType') }})
    form_factor: Optional[DeviceFormFactorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formFactor') }})
    heap_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heapSize') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    instances: Optional[List[DeviceInstance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    platform: Optional[DevicePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    radio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radio') }})
    remote_access_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteAccessEnabled') }})
    remote_debug_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteDebugEnabled') }})
    resolution: Optional[Resolution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    
