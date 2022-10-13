from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import backenddefaults
from . import backend
from . import listener
from . import logging
from . import servicediscovery


@dataclass_json
@dataclass
class VirtualNodeSpec:
    backend_defaults: Optional[backenddefaults.BackendDefaults] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backendDefaults' }})
    backends: Optional[List[backend.Backend]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backends' }})
    listeners: Optional[List[listener.Listener]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listeners' }})
    logging: Optional[logging.Logging] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logging' }})
    service_discovery: Optional[servicediscovery.ServiceDiscovery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceDiscovery' }})
    
