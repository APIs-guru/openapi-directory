from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class DeleteFleetSuccessItem:
    r"""DeleteFleetSuccessItem
    Describes an EC2 Fleet that was successfully deleted.
    """
    
    current_fleet_state: Optional[FleetStateCodeEnum] = field(default=None)
    fleet_id: Optional[str] = field(default=None)
    previous_fleet_state: Optional[FleetStateCodeEnum] = field(default=None)
    
