from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import addonversioninfo


@dataclass_json
@dataclass
class AddonInfo:
    addon_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addonName' }})
    addon_versions: Optional[List[addonversioninfo.AddonVersionInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addonVersions' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
