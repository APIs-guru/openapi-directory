from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteFleetErrorItem:
    r"""DeleteFleetErrorItem
    Describes an EC2 Fleet that was not successfully deleted.
    """
    
    error: Optional[DeleteFleetError] = field(default=None)
    fleet_id: Optional[str] = field(default=None)
    
