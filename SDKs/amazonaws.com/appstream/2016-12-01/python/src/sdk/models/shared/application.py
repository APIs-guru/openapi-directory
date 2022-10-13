from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Application:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IconURL' }})
    launch_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchParameters' }})
    launch_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchPath' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
