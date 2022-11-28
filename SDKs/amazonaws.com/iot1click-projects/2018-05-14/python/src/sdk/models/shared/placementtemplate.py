from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlacementTemplate:
    r"""PlacementTemplate
    An object defining the template for a placement.
    """
    
    default_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAttributes') }})
    device_templates: Optional[dict[str, DeviceTemplate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceTemplates') }})
    
