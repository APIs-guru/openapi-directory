from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import compatibility


@dataclass_json
@dataclass
class AddonVersionInfo:
    addon_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addonVersion' }})
    architecture: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'architecture' }})
    compatibilities: Optional[List[compatibility.Compatibility]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibilities' }})
    
