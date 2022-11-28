from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayRouteTable:
    r"""TransitGatewayRouteTable
    Describes a transit gateway route table.
    """
    
    creation_time: Optional[datetime] = field(default=None)
    default_association_route_table: Optional[bool] = field(default=None)
    default_propagation_route_table: Optional[bool] = field(default=None)
    state: Optional[TransitGatewayRouteTableStateEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    transit_gateway_id: Optional[str] = field(default=None)
    transit_gateway_route_table_id: Optional[str] = field(default=None)
    
