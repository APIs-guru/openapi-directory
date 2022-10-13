from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RemoveTargetsRequest:
    event_bus_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventBusName' }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Force' }})
    ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ids' }})
    rule: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rule' }})
    
