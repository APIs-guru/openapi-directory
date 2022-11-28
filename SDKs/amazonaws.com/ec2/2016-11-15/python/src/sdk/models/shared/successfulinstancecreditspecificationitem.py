from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SuccessfulInstanceCreditSpecificationItem:
    r"""SuccessfulInstanceCreditSpecificationItem
    Describes the burstable performance instance whose credit option for CPU usage was successfully modified.
    """
    
    instance_id: Optional[str] = field(default=None)
    
