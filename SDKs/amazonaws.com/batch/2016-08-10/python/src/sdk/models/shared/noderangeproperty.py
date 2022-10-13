from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import containerproperties


@dataclass_json
@dataclass
class NodeRangeProperty:
    container: Optional[containerproperties.ContainerProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container' }})
    target_nodes: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetNodes' }})
    
