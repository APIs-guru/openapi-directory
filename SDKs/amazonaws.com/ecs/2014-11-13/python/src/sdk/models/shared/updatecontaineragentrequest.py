from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateContainerAgentRequest:
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    container_instance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerInstance' }})
    
