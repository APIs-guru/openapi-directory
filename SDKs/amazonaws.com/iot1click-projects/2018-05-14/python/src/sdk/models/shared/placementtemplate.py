from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import devicetemplate


@dataclass_json
@dataclass
class PlacementTemplate:
    default_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultAttributes' }})
    device_templates: Optional[dict[str, devicetemplate.DeviceTemplate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceTemplates' }})
    
