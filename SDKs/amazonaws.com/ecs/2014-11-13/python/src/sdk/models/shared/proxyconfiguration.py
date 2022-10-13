from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import proxyconfigurationtype_enum


@dataclass_json
@dataclass
class ProxyConfiguration:
    container_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerName' }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    type: Optional[proxyconfigurationtype_enum.ProxyConfigurationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
