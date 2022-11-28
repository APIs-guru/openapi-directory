from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class UnsuccessfulInstanceCreditSpecificationItemError:
    r"""UnsuccessfulInstanceCreditSpecificationItemError
    Information about the error for the burstable performance instance whose credit option for CPU usage was not modified.
    """
    
    code: Optional[UnsuccessfulInstanceCreditSpecificationErrorCodeEnum] = field(default=None)
    message: Optional[str] = field(default=None)
    
