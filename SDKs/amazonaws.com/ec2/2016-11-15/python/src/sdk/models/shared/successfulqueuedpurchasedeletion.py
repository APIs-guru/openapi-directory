from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SuccessfulQueuedPurchaseDeletion:
    r"""SuccessfulQueuedPurchaseDeletion
    Describes a Reserved Instance whose queued purchase was successfully deleted.
    """
    
    reserved_instances_id: Optional[str] = field(default=None)
    
