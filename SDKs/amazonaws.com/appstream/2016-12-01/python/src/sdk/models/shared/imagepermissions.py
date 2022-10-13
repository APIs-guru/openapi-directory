from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImagePermissions:
    allow_fleet: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowFleet' }})
    allow_image_builder: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowImageBuilder' }})
    
