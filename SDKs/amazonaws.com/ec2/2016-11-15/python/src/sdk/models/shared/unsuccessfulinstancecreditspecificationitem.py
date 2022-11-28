from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class UnsuccessfulInstanceCreditSpecificationItem:
    r"""UnsuccessfulInstanceCreditSpecificationItem
    Describes the burstable performance instance whose credit option for CPU usage was not modified.
    """
    
    error: Optional[UnsuccessfulInstanceCreditSpecificationItemError] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    
