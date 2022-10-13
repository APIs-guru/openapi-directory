from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import scanstatus_enum


@dataclass_json
@dataclass
class ImageScanStatus:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: Optional[scanstatus_enum.ScanStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
