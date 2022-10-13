from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import containerinfo
from . import containerprovidertype_enum


@dataclass_json
@dataclass
class ContainerProvider:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    info: Optional[containerinfo.ContainerInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    type: containerprovidertype_enum.ContainerProviderTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
