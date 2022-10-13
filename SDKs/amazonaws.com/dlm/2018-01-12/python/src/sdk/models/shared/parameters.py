from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Parameters:
    exclude_boot_volume: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcludeBootVolume' }})
    no_reboot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NoReboot' }})
    
