from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ResourcePendingMaintenanceActions:
    r"""ResourcePendingMaintenanceActions
    Represents the output of <a>ApplyPendingMaintenanceAction</a>. 
    """
    
    pending_maintenance_action_details: Optional[List[PendingMaintenanceAction]] = field(default=None)
    resource_identifier: Optional[str] = field(default=None)
    
