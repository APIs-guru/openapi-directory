from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import volumefiltername_enum


@dataclass_json
@dataclass
class VolumeFilter:
    name: Optional[volumefiltername_enum.VolumeFilterNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
