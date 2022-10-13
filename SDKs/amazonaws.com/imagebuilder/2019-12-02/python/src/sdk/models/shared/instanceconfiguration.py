from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instanceblockdevicemapping


@dataclass_json
@dataclass
class InstanceConfiguration:
    block_device_mappings: Optional[List[instanceblockdevicemapping.InstanceBlockDeviceMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockDeviceMappings' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    
