from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImageScanningConfiguration:
    scan_on_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scanOnPush' }})
    
