from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class Reservation:
    r"""Reservation
    Describes a launch request for one or more instances, and includes owner, requester, and security group information that applies to all instances in the launch request.
    """
    
    groups: Optional[List[GroupIdentifier]] = field(default=None)
    instances: Optional[List[Instance]] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    requester_id: Optional[str] = field(default=None)
    reservation_id: Optional[str] = field(default=None)
    
