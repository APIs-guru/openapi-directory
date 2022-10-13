from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pendingmaintenanceaction


@dataclass_json
@dataclass
class ResourcePendingMaintenanceActions:
    pending_maintenance_action_details: Optional[List[pendingmaintenanceaction.PendingMaintenanceAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PendingMaintenanceActionDetails' }})
    resource_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceIdentifier' }})
    
