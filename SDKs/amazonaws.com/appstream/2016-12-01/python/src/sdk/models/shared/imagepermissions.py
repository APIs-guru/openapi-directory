from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImagePermissions:
    r"""ImagePermissions
    Describes the permissions for an image. 
    """
    
    allow_fleet: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowFleet') }})
    allow_image_builder: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowImageBuilder') }})
    
