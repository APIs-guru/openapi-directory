from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import radiussettings


@dataclass_json
@dataclass
class UpdateRadiusRequest:
    directory_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    radius_settings: radiussettings.RadiusSettings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RadiusSettings' }})
    
