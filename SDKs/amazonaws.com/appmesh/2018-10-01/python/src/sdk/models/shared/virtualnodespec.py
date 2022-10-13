from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listener
from . import servicediscovery


@dataclass_json
@dataclass
class VirtualNodeSpec:
    backends: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backends' }})
    listeners: Optional[List[listener.Listener]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listeners' }})
    service_discovery: Optional[servicediscovery.ServiceDiscovery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceDiscovery' }})
    
