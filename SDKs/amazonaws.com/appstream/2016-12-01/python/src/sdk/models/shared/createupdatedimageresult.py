from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import image


@dataclass_json
@dataclass
class CreateUpdatedImageResult:
    can_update_image: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canUpdateImage' }})
    image: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    
