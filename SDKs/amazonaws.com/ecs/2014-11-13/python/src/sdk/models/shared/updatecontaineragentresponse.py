from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import containerinstance


@dataclass_json
@dataclass
class UpdateContainerAgentResponse:
    container_instance: Optional[containerinstance.ContainerInstance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerInstance' }})
    
