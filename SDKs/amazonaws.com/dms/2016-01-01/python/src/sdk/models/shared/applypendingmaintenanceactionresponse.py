from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApplyPendingMaintenanceActionResponse:
    r"""ApplyPendingMaintenanceActionResponse
    <p/>
    """
    
    resource_pending_maintenance_actions: Optional[ResourcePendingMaintenanceActions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourcePendingMaintenanceActions') }})
    
