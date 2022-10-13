from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import platformdevicetype_enum


@dataclass_json
@dataclass
class PlatformDevice:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: platformdevicetype_enum.PlatformDeviceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
