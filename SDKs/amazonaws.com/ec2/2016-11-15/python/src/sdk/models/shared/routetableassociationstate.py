from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class RouteTableAssociationState:
    r"""RouteTableAssociationState
    Describes the state of an association between a route table and a subnet or gateway.
    """
    
    state: Optional[RouteTableAssociationStateCodeEnum] = field(default=None)
    status_message: Optional[str] = field(default=None)
    
