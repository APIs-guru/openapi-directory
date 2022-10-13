from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import healthcheckpolicy
from . import portmapping


@dataclass_json
@dataclass
class Listener:
    health_check: Optional[healthcheckpolicy.HealthCheckPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthCheck' }})
    port_mapping: Optional[portmapping.PortMapping] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portMapping' }})
    
