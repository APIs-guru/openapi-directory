from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import containeroverrides


@dataclass_json
@dataclass
class NodePropertyOverride:
    container_overrides: Optional[containeroverrides.ContainerOverrides] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerOverrides' }})
    target_nodes: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetNodes' }})
    
