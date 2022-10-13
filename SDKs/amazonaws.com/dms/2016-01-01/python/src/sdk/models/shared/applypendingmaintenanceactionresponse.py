from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourcependingmaintenanceactions


@dataclass_json
@dataclass
class ApplyPendingMaintenanceActionResponse:
    resource_pending_maintenance_actions: Optional[resourcependingmaintenanceactions.ResourcePendingMaintenanceActions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourcePendingMaintenanceActions' }})
    
