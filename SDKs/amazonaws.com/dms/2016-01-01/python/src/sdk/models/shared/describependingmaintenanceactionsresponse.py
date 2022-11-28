from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribePendingMaintenanceActionsResponse:
    r"""DescribePendingMaintenanceActionsResponse
    <p/>
    """
    
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    pending_maintenance_actions: Optional[List[ResourcePendingMaintenanceActions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PendingMaintenanceActions') }})
    
