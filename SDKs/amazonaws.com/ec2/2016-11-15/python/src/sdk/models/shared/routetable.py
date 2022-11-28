from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class RouteTable:
    r"""RouteTable
    Describes a route table.
    """
    
    associations: Optional[List[RouteTableAssociation]] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    propagating_vgws: Optional[List[PropagatingVgw]] = field(default=None)
    route_table_id: Optional[str] = field(default=None)
    routes: Optional[List[Route]] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
