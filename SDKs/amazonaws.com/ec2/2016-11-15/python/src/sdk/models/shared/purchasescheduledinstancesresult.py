from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class PurchaseScheduledInstancesResult:
    r"""PurchaseScheduledInstancesResult
    Contains the output of PurchaseScheduledInstances.
    """
    
    scheduled_instance_set: Optional[List[ScheduledInstance]] = field(default=None)
    
