from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PortOverride:
    endpoint_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointPort' }})
    listener_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListenerPort' }})
    
