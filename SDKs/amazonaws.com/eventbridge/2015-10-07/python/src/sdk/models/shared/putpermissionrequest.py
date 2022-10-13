from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import condition


@dataclass_json
@dataclass
class PutPermissionRequest:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    condition: Optional[condition.Condition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Condition' }})
    event_bus_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventBusName' }})
    policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policy' }})
    principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Principal' }})
    statement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementId' }})
    
