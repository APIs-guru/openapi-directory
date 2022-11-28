from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourcePendingMaintenanceActions:
    r"""ResourcePendingMaintenanceActions
    Identifies an DMS resource and any pending actions for it.
    """
    
    pending_maintenance_action_details: Optional[List[PendingMaintenanceAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PendingMaintenanceActionDetails') }})
    resource_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIdentifier') }})
    
