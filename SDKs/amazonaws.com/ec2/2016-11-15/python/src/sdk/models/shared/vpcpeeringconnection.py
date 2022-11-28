from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class VpcPeeringConnection:
    r"""VpcPeeringConnection
    Describes a VPC peering connection.
    """
    
    accepter_vpc_info: Optional[VpcPeeringConnectionVpcInfo] = field(default=None)
    expiration_time: Optional[datetime] = field(default=None)
    requester_vpc_info: Optional[VpcPeeringConnectionVpcInfo] = field(default=None)
    status: Optional[VpcPeeringConnectionStateReason] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    vpc_peering_connection_id: Optional[str] = field(default=None)
    
