from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import kernelcapabilities
from . import device
from . import tmpfs


@dataclass_json
@dataclass
class LinuxParameters:
    capabilities: Optional[kernelcapabilities.KernelCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    devices: Optional[List[device.Device]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    init_process_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initProcessEnabled' }})
    max_swap: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSwap' }})
    shared_memory_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedMemorySize' }})
    swappiness: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'swappiness' }})
    tmpfs: Optional[List[tmpfs.Tmpfs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tmpfs' }})
    
