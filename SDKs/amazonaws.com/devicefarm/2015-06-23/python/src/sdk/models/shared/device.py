from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import deviceavailability_enum
from . import cpu
from . import deviceformfactor_enum
from . import deviceinstance
from . import deviceplatform_enum
from . import resolution


@dataclass_json
@dataclass
class Device:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    availability: Optional[deviceavailability_enum.DeviceAvailabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability' }})
    carrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrier' }})
    cpu: Optional[cpu.CPU] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu' }})
    fleet_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fleetName' }})
    fleet_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fleetType' }})
    form_factor: Optional[deviceformfactor_enum.DeviceFormFactorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formFactor' }})
    heap_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heapSize' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    instances: Optional[List[deviceinstance.DeviceInstance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instances' }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os' }})
    platform: Optional[deviceplatform_enum.DevicePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    radio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radio' }})
    remote_access_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteAccessEnabled' }})
    remote_debug_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteDebugEnabled' }})
    resolution: Optional[resolution.Resolution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    
