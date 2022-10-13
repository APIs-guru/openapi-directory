from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import directoryvpcsettings


@dataclass_json
@dataclass
class AddRegionRequest:
    directory_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    region_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegionName' }})
    vpc_settings: directoryvpcsettings.DirectoryVpcSettings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VPCSettings' }})
    
