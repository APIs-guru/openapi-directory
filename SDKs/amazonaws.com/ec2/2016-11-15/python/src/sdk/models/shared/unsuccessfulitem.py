from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class UnsuccessfulItem:
    r"""UnsuccessfulItem
    Information about items that were not successfully processed in a batch call.
    """
    
    error: Optional[UnsuccessfulItemError] = field(default=None)
    resource_id: Optional[str] = field(default=None)
    
