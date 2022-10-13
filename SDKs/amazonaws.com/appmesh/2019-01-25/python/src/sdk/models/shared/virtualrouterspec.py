from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import virtualrouterlistener


@dataclass_json
@dataclass
class VirtualRouterSpec:
    listeners: Optional[List[virtualrouterlistener.VirtualRouterListener]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listeners' }})
    
