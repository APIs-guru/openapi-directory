from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceTemplate:
    r"""DeviceTemplate
    An object representing a device for a placement template (see <a>PlacementTemplate</a>).
    """
    
    callback_overrides: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackOverrides') }})
    device_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceType') }})
    
