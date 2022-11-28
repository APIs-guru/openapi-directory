from dataclasses import dataclass, field
from typing import List
from . import *


@dataclass
class OriginGroupMembers:
    r"""OriginGroupMembers
    A complex data type for the origins included in an origin group.
    """
    
    items: List[OriginGroupMember] = field()
    quantity: int = field()
    
