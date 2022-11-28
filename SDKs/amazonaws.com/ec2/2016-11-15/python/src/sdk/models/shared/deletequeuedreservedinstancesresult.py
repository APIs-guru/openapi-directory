from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DeleteQueuedReservedInstancesResult:
    failed_queued_purchase_deletions: Optional[List[FailedQueuedPurchaseDeletion]] = field(default=None)
    successful_queued_purchase_deletions: Optional[List[SuccessfulQueuedPurchaseDeletion]] = field(default=None)
    
