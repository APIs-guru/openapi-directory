from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import target


@dataclass_json
@dataclass
class PutTargetsRequest:
    event_bus_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventBusName' }})
    rule: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rule' }})
    targets: List[target.Target] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    
