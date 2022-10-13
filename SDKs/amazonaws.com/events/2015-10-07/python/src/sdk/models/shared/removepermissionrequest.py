from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RemovePermissionRequest:
    event_bus_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventBusName' }})
    remove_all_permissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoveAllPermissions' }})
    statement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementId' }})
    
