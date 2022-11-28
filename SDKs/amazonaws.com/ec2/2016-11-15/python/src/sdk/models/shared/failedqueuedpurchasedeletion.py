from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class FailedQueuedPurchaseDeletion:
    r"""FailedQueuedPurchaseDeletion
    Describes a Reserved Instance whose queued purchase was not deleted.
    """
    
    error: Optional[DeleteQueuedReservedInstancesError] = field(default=None)
    reserved_instances_id: Optional[str] = field(default=None)
    
