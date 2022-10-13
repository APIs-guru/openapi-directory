from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import portmapping


@dataclass_json
@dataclass
class VirtualRouterListener:
    port_mapping: portmapping.PortMapping = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portMapping' }})
    
