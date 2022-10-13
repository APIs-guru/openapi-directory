from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import diskiopsconfigurationmode_enum


@dataclass_json
@dataclass
class DiskIopsConfiguration:
    iops: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Iops' }})
    mode: Optional[diskiopsconfigurationmode_enum.DiskIopsConfigurationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mode' }})
    
