from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class RouteTableAssociation:
    r"""RouteTableAssociation
    Describes an association between a route table and a subnet or gateway.
    """
    
    association_state: Optional[RouteTableAssociationState] = field(default=None)
    gateway_id: Optional[str] = field(default=None)
    main: Optional[bool] = field(default=None)
    route_table_association_id: Optional[str] = field(default=None)
    route_table_id: Optional[str] = field(default=None)
    subnet_id: Optional[str] = field(default=None)
    
